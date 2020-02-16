import React, { useState, useEffect } from "react";
import { http } from "../../core/http";
import { AdList } from "../../components/ad-list/AdList";
import { Filter } from "../../components/filter/Filter";

export function ViewAds() {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    getAds();
  }, [filters]);

  async function getAds() {
    const adsResponse = await http.get("/ads", { params: filters });
    const ads = adsResponse.data;
    const usersPromises = ads.map(ad => http.get(`/users/${ad.userId}`));
    const usersPromiseResponse = await Promise.all(usersPromises);
    const users = usersPromiseResponse.map(userResponse => userResponse.data);
    const composedAds = ads.map(ad => {
      const adUser = users.find(user => user._id === ad.userId);
      return {
        ...ad,
        user: adUser
      };
    });

    setAds(composedAds);
  }

  return (
    <div>
      <Filter onApply={filters => setFilters(filters)}></Filter>
      <AdList ads={ads}></AdList>
    </div>
  );
}

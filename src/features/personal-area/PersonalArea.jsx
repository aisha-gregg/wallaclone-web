import React, { useState, useEffect } from "react";
import { Filter } from "../../components/filter/Filter";
import { AdList } from "../../components/ad-list/AdList";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../core/UserContext";
import { getAdsDetail } from "../../core/AdsRepository";

export function PersonalArea() {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({});
  const history = useHistory();
  const { user } = useContext(UserContext);

  useEffect(() => {
    getAds();
  }, [filters]);

  async function getAds() {
    const adsDetail = await getAdsDetail({ filters, ownerId: user.id });
    setAds(adsDetail);
  }

  function onRoute(seoUrl) {
    history.push(`/ads/${seoUrl}`);
  }

  return (
    <div>
      <h2>Mis anuncios</h2>
      <Filter onApply={filters => setFilters(filters)}></Filter>
      <AdList ads={ads} onAdClick={seoUrl => onRoute(seoUrl)}></AdList>
    </div>
  );
}

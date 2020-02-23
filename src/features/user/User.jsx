import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getAdsDetail } from "../../core/AdsRepository";
import { Filter } from "../../components/filter/Filter";
import { AdList } from "../../components/ad-list/AdList";

export function User() {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({});
  const [user, setUser] = useState(undefined);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getAds();
  }, [filters]);

  async function getAds() {
    const adsDetail = await getAdsDetail({ filters, ownerId: params.id });
    setAds(adsDetail);
    setUser(adsDetail[0].user);
  }

  function onRoute(seoUrl) {
    history.push(`/ads/${seoUrl}`);
  }

  return (
    <div>
      <h2>Anuncios de {user?.email}</h2>
      <Filter onApply={filters => setFilters(filters)}></Filter>
      <AdList ads={ads} onAdClick={seoUrl => onRoute(seoUrl)}></AdList>
    </div>
  );
}

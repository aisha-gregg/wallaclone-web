import React, { useState, useEffect } from "react";
import { AdList } from "../../components/ad-list/AdList";
import { Filter } from "../../components/filter/Filter";
import { useHistory } from "react-router-dom";
import { getAdsDetail } from "../../core/AdsRepository";

export function ViewAds() {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({});
  const history = useHistory();

  useEffect(() => {
    getAds();
  }, [filters]);

  async function getAds() {
    const adsDetail = await getAdsDetail({ filters });
    setAds(adsDetail);
  }

  function onRoute(seoUrl) {
    history.push(`/ads/${seoUrl}`);
  }

  return (
    <div>
      <Filter onApply={filters => setFilters(filters)}></Filter>
      <AdList ads={ads} onAdClick={seoUrl => onRoute(seoUrl)}></AdList>
    </div>
  );
}

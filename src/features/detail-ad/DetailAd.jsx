import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ad } from "../../components/ad/Ad";
import { getAdDetail } from "../../core/AdsRepository";

export function DetailAd() {
  const { seoId } = useParams();
  const [ad, setAd] = useState(undefined);
  const id = seoId.split("-").pop();

  useEffect(() => {
    getAdDetail(id).then(ad => setAd(ad));
  }, [seoId, id]);

  return ad === undefined ? <p>Loading</p> : <Ad ad={ad}></Ad>;
}

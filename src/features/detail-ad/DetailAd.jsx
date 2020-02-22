import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ad } from "../../components/ad/Ad";
import { getAdDetail } from "../../core/AdsRepository";
import { EditAd } from "../edit-ads/EditAd";
import { Button } from "react-bootstrap";
import styles from "./DetailAd.module.css";

export function DetailAd() {
  const { seoId } = useParams();
  const [ad, setAd] = useState(undefined);
  const [isShown, setIsShown] = useState(false);
  const id = seoId.split("-").pop();

  useEffect(() => {
    getAdDetail(id).then(ad => setAd(ad));
  }, [seoId, id]);

  return ad === undefined ? (
    <p>Loading</p>
  ) : (
    <>
      <div className={styles.detail}></div>
      <Ad ad={ad}></Ad>
      <Button type="submit" onClick={() => setIsShown(!isShown)}>
        Editar
      </Button>
      {isShown && <EditAd ad={ad}></EditAd>}
    </>
  );
}

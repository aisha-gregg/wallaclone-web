import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Ad } from "../../components/ad/Ad";
import { getAdDetail } from "../../core/AdsRepository";
import { EditAd } from "../edit-ads/EditAd";
import { Button } from "react-bootstrap";
import { UserContext } from "../../core/UserContext";

export function DetailAd() {
  const { seoId } = useParams();
  const [ad, setAd] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const id = seoId.split("-").pop();
  const { user } = useContext(UserContext);

  useEffect(() => {
    getAdDetail(id).then(ad => setAd(ad));
  }, [seoId, id]);

  return ad === undefined ? (
    <p>Loading</p>
  ) : (
    <>
      {isEditing ? (
        <EditAd ad={ad}></EditAd>
      ) : (
        <Ad
          ad={ad}
          action={
            user.id === ad.userId && (
              <Button type="submit" onClick={() => setIsEditing(!isEditing)}>
                Editar
              </Button>
            )
          }
        ></Ad>
      )}
    </>
  );
}

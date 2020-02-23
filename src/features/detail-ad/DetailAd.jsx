import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Ad } from "../../components/ad/Ad";
import { getAdDetail } from "../../core/AdsRepository";
import { EditAd } from "../edit-ads/EditAd";
import { Button } from "react-bootstrap";
import { UserContext } from "../../core/UserContext";
import { http } from "../../core/http";
import classNames from "classnames/bind";
import styles from "./DetailAd.module.css";

const cx = classNames.bind(styles);

export function DetailAd() {
  const { seoId } = useParams();
  const [ad, setAd] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const id = seoId.split("-").pop();
  const { user } = useContext(UserContext);
  const history = useHistory();

  const deleteAd = async () => {
    const shouldDelete = window.confirm(
      "¿Seguro que quieres borrar el anuncio?"
    );
    if (!shouldDelete) {
      return;
    }

    await http.delete(`/ads/${ad._id}`);
    history.push("/");
  };

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
              <div className={cx("buttons")}>
                <Button type="submit" onClick={() => setIsEditing(!isEditing)}>
                  Editar
                </Button>
                <Button onClick={() => deleteAd()} variant="danger">
                  Eliminar
                </Button>
              </div>
            )
          }
        ></Ad>
      )}
    </>
  );
}

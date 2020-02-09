import React, { useState, useEffect } from "react";
import { http } from "./http";
import { AdList } from "./AdList";

export function ViewAds() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    http.get("/ads").then(response => {
      setAds(response.data);
    });
  }, []);

  return (
    <div>
      <AdList ads={ads}></AdList>
    </div>
  );
}

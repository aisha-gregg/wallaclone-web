import React, { useEffect } from "react";
import { http } from "./http";
import { CreateAd } from "./CreateAd";

export function Home() {
  useEffect(() => {
    http.get("/ads");
  });
  return <CreateAd />;
}

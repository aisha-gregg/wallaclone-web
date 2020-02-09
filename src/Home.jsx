import React from "react";
import { ViewAds } from "./ViewAds";
import { Header } from "./Header";

export function Home() {
  return (
    <div>
      <Header>Welcome to Wallaclone</Header>

      <ViewAds></ViewAds>
    </div>
  );
}

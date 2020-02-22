import React from "react";
import { ViewAds } from "./ViewAds";
import { Search } from "../../components/search/Search";

export function Home() {
  return (
    <div>
      <Search></Search>
      <ViewAds></ViewAds>
    </div>
  );
}

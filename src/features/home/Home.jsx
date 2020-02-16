import React from "react";

import { ViewAds } from "./ViewAds";
import { Header } from "../../components/header/Header";
import SearchPage from "../../components/search/Search";

export function Home() {
  return (
    <div>
      <Header>Welcome to Wallaclone</Header>

      <SearchPage> </SearchPage>
      <ViewAds></ViewAds>
    </div>
  );
}

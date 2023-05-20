import React from "react";
import Banner from "../../components/banner/banner";
import CardsWrapper from "../../components/cardsWrapper/cardsWrapper";

function Home() {
  return (
    <div className="homePage">
      <Banner />
      <CardsWrapper />
    </div>
  );
}

export default Home;

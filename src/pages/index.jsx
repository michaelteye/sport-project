import React from "react";
import Banner from "../components/Banner";
import CountryLeagues from "../layout/CountryLeagues";
import MostPopular from "../layout/MostPopular";
import Collection from "../layout/Collection";
import Container from "../layout/Container";
import SubCollection from "../layout/SubCollection";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <MostPopular />
        <CountryLeagues />
        <Collection />
        <SubCollection />
      </Container>
    </>
  );
}

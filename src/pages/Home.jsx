import React from "react";
import Banner from "./Banner";
import Benefit from "./Benefit";
import Faq from "./Faq";
import Hero from "./Hero";
import Partners from "./Partners";
import Roadmap from "./Roadmap";
import Teams from "./Teams";
import Trait from "./Trait";

function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Roadmap />
      <Benefit />
      <Trait />
      <Teams />
      <Faq />
      <Partners />
    </>
  );
}

export default Home;

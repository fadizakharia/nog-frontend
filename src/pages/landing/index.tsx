import React from "react";

import CTA from "./CTA";
import FAQ from "./FAQ";
import Perks from "./Perks";
import Requirements from "./Requirements";
import Header from "./Header";

const Index = () => {
  return (
    <React.Fragment>
      <Header />
      <Perks />
      <Requirements />
      <FAQ />
      <CTA />
    </React.Fragment>
  );
};

export default Index;

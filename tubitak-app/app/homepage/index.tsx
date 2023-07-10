import React from "react";
import HomeContainer from "../../containers/home";
import { successes } from "../../mocks/successes";

export default function HomePage() {
  return (
    <HomeContainer successes={successes} />
  );

}
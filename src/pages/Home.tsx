import { useState } from "react";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <Wrapper>
      <NavBar />
      <p>
        Hi we are BuyBye! A completely fake online store created by Minh Nguyen
        in order to practice his front-end web development skills. The primary
        objectives of this project were to: get familiar with React Router and
        to practice fetching data from an API with useEffect. Any products,
        services, or promotions associated with BuyBye! are entirely fictional
        and should not be considered genuine.
      </p>
    </Wrapper>
  );
}

export default Home;

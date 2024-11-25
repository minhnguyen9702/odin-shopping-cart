import { useState } from "react";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import cowboy from "../assets/cowboy.jpg";

//* https://unsplash.com/photos/man-in-blue-jacket-riding-white-horse-during-daytime-axIJBMh5NSw *//

function Home() {
  return (
    <Wrapper>
      <div className="md:flex grow items-center">
        <div className="mx-auto">
          <img
            src={cowboy}
            alt="cowboy"
            className="md:max-w-md max-w-full h-auto"
          />
        </div>
        <div className="mt-2 md:ml-4 md:mt-0">
          <h1 className="text-2xl md:text-4xl text-center">Who are we?</h1>
          <p className="md:text-lg mb-4">
            Hi we are BuyBye! A completely fake online store created by Minh
            Nguyen in order to practice his front-end web development skills.
            The primary objectives of this project were to: get familiar with
            React Router and to practice fetching data from an API with
            useEffect. Any products, services, or promotions associated with
            BuyBye! are entirely fictional and should not be considered genuine.
          </p>
          <p className="md:text-lg mb-4">
            Although I originally wanted to use Etsy's API to make a fake denim
            jacket store which is why chose this cowboy image; I soon found out
            that doing so is actually against Etsy's terms and conditions.
            Therefore, BuyBye uses fake unrelated items fetched from Fake Store
            API
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;

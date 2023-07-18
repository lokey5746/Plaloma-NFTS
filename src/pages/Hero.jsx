import React from "react";
import logo from "../img/herologo.png";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="mx-auto w-full py-20 px-8 md:max-w-6xl">
        <div className="flex flex-col items-center">
          <div className="md:mt-96">
            <h2 className="text-3xl md:text-4xl text-black font-bold text-center uppercase">
              Welcome to Plaloma
            </h2>
            <div className="hero__box mt-6">
              <p className="text-sm md:text-xl leading-8 md:leading-10 p-4 md:p-6 text-center text-black">
                Of all the animals on planet Earth, the eagle may be the most
                beautiful, the hummingbird is the cutest, but when it comes to
                intelligence, we choose the Dolphin which in Thai is pronounced
                "Plaloma"! We have chosen the Dolphin as the protagonist of our
                collection of NFTs for its marked intelligence, sympathy, and
                desire to have fun and entertain others. But also because the
                Dolphin is the mammal that represents Patong Beach and all of
                Phuket! After a period as devastating as the Covid-19 Pandemic
                was, Phuket needs to recover psychologically and economically,
                the Phuket Holiday Coin TEAM has embarked on a very demanding
                adventure to give oxygen to all this. The Phuket Holiday coin
                Team has created a DeFi phc.finance platform, a PHC Token that
                will try with its countless uses and with the help of our
                collection of NFTs precisely PLALOMA (Dolphin in Thai) to help
                raise us up! The TEAM is made up of people with various
                qualifications and training and business experiences, we will
                use all our energies to make this project successful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

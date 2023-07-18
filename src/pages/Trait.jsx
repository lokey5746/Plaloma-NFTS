import React from "react";
import trait from "../img/trait.gif";

function Trait() {
  return (
    <section className="trait" id="trait">
      <div className="mx-auto w-full py-20 px-8 md:max-w-6xl uppercase">
        <div className="flex flex-col items-center">
          <div className="space-y-2">
            <h2 className="md:text-4xl text-yellow text-center text-3xl">
              Traits
            </h2>
            <p className="text-center text-base md:text-xl leading-9">
              The "Plaloma" are 10,000 unique and fun dolphins that swim around
              the Andaman Sea, with 10 exclusive and unique pieces that can be
              won through giveaways and other events. The project has been
              created by NFT collectors, artists and professionals with the
              unified goal of bringing something special to the community. They
              are programmatically generated from more than 150 traits. Owning a
              Plaloma NFT is a BIG deal and an exclusive experience!
            </p>
          </div>
          <img className="mt-16" src={trait} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Trait;

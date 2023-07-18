import React from "react";
import Marquee from "react-fast-marquee";
import Rarity from "../components/Rarity";
import SingleRarity from "../components/SingleRarity";
import discord from "../img/discordblack.svg";

function Banner() {
  return (
    <section className="w-ful py-10 banner space-y-5" id="banner">
      <div className="w-full mx-auto">
        <Marquee className="" gradient={false} number={40} direction="right">
          <Rarity />
        </Marquee>
      </div>
      <div className="w-full mx-auto">
        <Marquee gradient={false} className="">
          <SingleRarity />
        </Marquee>
      </div>
      <div className="flex flex-col items-center">
        <a
          href="#"
          className="bg-yellow px-5 py-3 rounded-md border-2 border-black flex items-center mt-10"
        >
          <img src={discord} alt="" />
          <p className="text-black uppercase">Join Our Discord</p>
        </a>
      </div>
    </section>
  );
}

export default Banner;

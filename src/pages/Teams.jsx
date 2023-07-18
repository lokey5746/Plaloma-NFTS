import React, { useState } from "react";
import teamData from "../handlers/teamData";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";

function Teams() {
  const [data, setData] = useState(teamData);

  return (
    <section className="team" id="team">
      <div className="mx-auto w-full py-10 px-8 md:max-w-6xl">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl text-yellow text-center uppercase">
            The Team
          </h2>
          <p className="text-center text-base md:text-xl leading-9">
            Our international team is a sinergy of talented artists, experienced
            developers, business development, tourism and Blockchain
            professionals. The Phuket Holiday Coin TEAM is not anonymous unlike
            many other projects, plus the Phuket Holiday Coin TEAM has received
            KYC verification. Everyone works hard to make sure our Plaloma
            community is getting the best experience and benefits, making our
            project one of a kind. Our team will grow together with the project
            and the large Phuket Holiday Coin community.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          {data.map((item) => (
            <figure className="space-y-3 flex flex-col items-center">
              <img src={item.image} alt="" />
              <h3 className="text-xl md:text-xl">{item.name}</h3>
              <p className="text-sm uppercase text-rainbow md:text-base text-yellow">
                {item.role}
              </p>
              {/* <div className="flex items-center space-x-3">
                <a href="">
                  <img className="h-7" src={twitter} alt="" />
                </a>
                <a href="">
                  <img className="h-7" src={instagram} alt="" />
                </a>
              </div> */}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;

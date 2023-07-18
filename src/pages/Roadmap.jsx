import React from "react";

import car from "../img/car.png";
import laptop from "../img/laptop.png";
import mobile from "../img/mobile.png";

import room from "../img/room.png";
import pool from "../img/pool.png";
import lake from "../img/lake.png";

function Roadmap() {
  return (
    <section className="bg-yellow" id="roadmap">
      <div className="mx-auto w-full py-10 px-8 md:max-w-6xl">
        <h2 className="md:text-4xl text-black text-3xl text-center uppercase">
          Roadmap
        </h2>
        <div>
          <div className="py-10 flex flex-col">
            <div className="w-1 h-24 bg-black shadow-md inset-0"></div>
            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-black rounded-full h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white shadow-md inset-0"></div>
              </div>
              <div className="p-2 md:p-6 -mt-6 md:-mt-10">
                <h2 className="text-2xl md:text-3xl text-black pt-1">
                  0% NFT Minted
                </h2>

                <ul className="text-black py-3 md:p-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-3 list-disc px-5 text-base md:text-xl ">
                    <li> Plaloma design and concept art </li>
                    <li>Design and development plan</li>
                    <li>Server setup, database and backend development</li>
                    <li>Website and trailer</li>
                    <li>Launch on social media platforms</li>
                    <li>Public sale "RANDOM"</li>
                  </ul>
                </ul>
              </div>
            </div>

            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-white rounded-full mt-4 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white shadow-md inset-0"></div>
              </div>
              <div className="p-2 md:p-6 -mt-3 md:-mt-6">
                <h2 className="text-2xl md:text-3xl text-black pt-1">
                  25% NFT Minted
                </h2>
                <ul className="text-black py-3 md:p-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-3 list-disc px-5 text-base md:text-xl ">
                    <li>
                      1st phase of Charity: Donation from the sale of the first
                      500 Paloma NFTs{" "}
                    </li>
                    <li>
                      ADS - Social - Local MarketingList on CoinGeko and CMC
                    </li>
                    <li>
                      Plaloma merchandise brand goods available online and on
                      local shops
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-white rounded-full mt-8 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white  shadow-md inset-0 mt-"></div>
              </div>
              <div className="p-2 md:p-6 mt-2 md:-mt-2">
                <h2 className="text-2xl md:text-3xl text-black pt-1">
                  50% NFT Minted
                </h2>
                <ul className="text-black py-3 md:p-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-3 list-disc px-5 text-base md:text-xl ">
                    <li>
                      2nd phase of Charity: Donation from the sale of the first
                      500 Paloma NFT
                    </li>
                    <li>
                      Use Plaloma for BOOST REWARD % FARM and POOL in
                      phc.finance
                    </li>
                    <li>
                      Use Plaloma to obtain discounts and VIP access at our
                      affiliated venues around Phuket
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-white rounded-full mt-8 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white  shadow-md inset-0 mt-"></div>
              </div>
              <div className="p-2 md:p-6 mt-2 md:-mt-2">
                <h2 className="text-2xl md:text-3xl text-black pt-1">
                  75% NFT Minted
                </h2>
                <ul className="text-black p-5 leading-6">
                  {/* ==== Single element==== */}
                  <h2 className="text-center text-xl md:text-2xl">
                    Purchase Lottery prizes
                  </h2>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <figure className="bg-black p-5 rounded-md shadow-md">
                      <div className="flex flex-col items-center">
                        <h2 className="text-center text-xl text-yellow">
                          For 1 Lucky Winner
                        </h2>
                        <img src={car} alt="" />
                      </div>
                      <ul className="list-disc space-y-2 text-white p-5">
                        <li>1 Haval Jolion</li>
                        <li>
                          Accommodation in <br />
                          Luxurious Resort for 7 days
                        </li>
                      </ul>
                    </figure>
                    <figure className="bg-black p-5 rounded-md shadow-md">
                      <div className="flex flex-col items-center">
                        <h2 className="text-center text-xl text-yellow">
                          For 5 Lucky Winners
                        </h2>
                        <img src={mobile} alt="" />
                      </div>
                      <ul className="list-disc space-y-2 text-white p-5">
                        <li>1 MacBook</li>
                        <li>
                          Accommodation in <br />
                          Luxurious Resort for 7 days
                        </li>
                      </ul>
                    </figure>
                    <figure className="bg-black p-5 rounded-md shadow-md">
                      <div className="flex flex-col items-center">
                        <h2 className="text-center text-xl text-yellow">
                          For 5 Lucky Winners
                        </h2>
                        <img src={laptop} alt="" />
                      </div>
                      <ul className="list-disc space-y-2 text-white p-5">
                        <li>1 iPhone 13 Pro</li>
                        <li>
                          Accommodation in <br />
                          Luxurious Resort for 7 days
                        </li>
                      </ul>
                    </figure>
                  </div>
                  <div className="bg-black mt-5 rounded-md  p-5 md:p-10">
                    <h2 className="text-center text-yellow text-xl md:text-2xl">
                      For 10 Lucky Winners
                    </h2>
                    <div className="grid mt-10 gap-5 grid-cols-1 md:grid-cols-3">
                      <img className="justify-self-center" src={room} alt="" />
                      <img className="justify-self-center" src={lake} alt="" />
                      <img className="justify-self-center" src={pool} alt="" />
                    </div>
                    <h2 className="text-center text-white text-lg pt-4 md:text-xl">
                      Accommodation in Luxurious Resort for 7 days x 2 people
                    </h2>
                  </div>
                </ul>
                <ul className="px-5 md:px-10 list-disc leading-8 text-base text-black md:text-xl">
                  <li>
                    Grand Opening show room prizes with local and international
                    media participation{" "}
                  </li>
                  <li>
                    3rd Phase of Charity: Donation from the sale of the first
                    500 Paloma NFTs{" "}
                  </li>
                  <li>
                    Use Plaloma for Discount and VIP access to Phuket Island
                    Merchandise{" "}
                  </li>
                  <li>
                    Lifetime free access to the VIP Area equipped with sunbed
                  </li>
                </ul>
              </div>
            </div>
            {/* single */}
            <div className="flex space-x-5">
              <div>
                <div className="bg-white rounded-full mt-8 h-5 w-5 -ml-2"></div>
                <div className="w-1 h-full bg-white  shadow-md inset-0 mt-"></div>
              </div>
              <div className="md:p-6 mt-3 md:-mt-2">
                <h2 className="text-2xl md:text-3xl text-black pt-1">
                  100% NFT Minted
                </h2>
                <ul className="text-black py-3 md:p-5 leading-6">
                  {/* ==== Single element==== */}
                  <ul className="space-y-3 list-disc px-5 text-base md:text-xl ">
                    <li>
                      2nd phase of Charity: Donation from the sale of the first
                      500 Paloma NFT
                    </li>
                    <li>
                      Use Plaloma for BOOST REWARD % FARM and POOL in
                      phc.finance
                    </li>
                    <li>
                      Use Plaloma to obtain discounts and VIP access at our
                      affiliated venues around Phuket
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;

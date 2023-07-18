import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Faq() {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };
  return (
    <section className="" id="faq">
      <div className="mx-auto w-full py-20 px-8 md:max-w-6xl">
        <h2 className="text-3xl md:text-4xl text-yellow text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-10">
          <Accordion allowZeroExpanded className="space-y-8">
            {/* ====Single Item====== */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      What is ''Plaloma''?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className=" md:max-w-5xl text-gray rounded-md shadow-md md:py-5 py-2   font-bold text-base md:text-lg">
                  The 'Plaloma' are 10,000 unique and fun dolphins swimming
                  around the Andaman Sea, with 10 custom 1/1 pieces that can be
                  won via giveaways and other events. The project was created by
                  NFT collectors, artists and professionals with the unified
                  goal of bringing something special to the community. They are
                  programmatically generated from more than 150 strokes. Owning
                  a Plaloma is a BIG deal!
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            {/* ====Single Item====== */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How can I get a Plaloma?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl  text-white md:py-5 py-2  text-base md:text-lg">
                  They will be purchased directly on our site. You will need a
                  MetaMask order to purchase the Plaloma.
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      What is a Public Mint Price?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl text-white  md:py-5 py-2   text-base md:text-xl">
                  Mint price is 0.15 BNB from 1 to 2500 Plaloma <br />
                  Mint price is 0.25 BNB from 2501 to 10000 Plaloma
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      When will you launch?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl text-white  md:py-5 py-2   text-base md:text-xl">
                  The Launch Day will be announced on Twitter, Discord and on
                  the official Plaloma Website. Stay Tuned not to miss!
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How will staking work?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl text-white rounded-md shadow-md md:py-5 py-2 text-base md:text-lg">
                  All Plaloma holders will be able to stake their NFTs on the
                  phc.finance platform in the Farm section with a maximum of 5
                  Plaloma, for each plaloma deposited a BOOST of 2% will be
                  recognized for a maximum of 10%
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      Are there plans to support a charity?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className=" md:max-w-5xl text-white  md:py-5 py-2  font-bold text-base md:text-lg">
                  The foundations to which the sums of money will be donated
                  will all be in the island of Phuket of different types. No
                  names will be disclosed prior to the donation. Donations will
                  be made publicly and posted on our various official social
                  channels.
                  <p className="mt-2">
                    The Foundations must be non-profit and of these entities:{" "}
                  </p>
                  <ul className="list-disc leading-8 px-8 mt-2">
                    <li>Orphanages Schools and scholarships</li>
                    <li>Local population with food aid</li>
                    <li>Marine fauna and flore protection and preservation</li>
                    <li>Animal shetters</li>
                    <li>Search and rescue</li>
                    <li>Hospital</li>
                  </ul>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      Where will the Plaloma live?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="text-white md:py-5 py-2 md:max-w-5xl text-base md:text-lg">
                  Our Plaloma will live on BSC Blockchain, a beautiful place
                  with low gas fees, fast transactions and huge growth
                  potential. All Plaloma NFT images are securely stored on IPFS,
                  a peer-to-peer hypermedia protocol designed to preserve and
                  grow humanity's knowledge forever.
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      Why should I HODL my Plaloma after minting?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl text-white  md:py-5 py-2  font-bold text-base md:text-lg">
                  <p className="mt-2">
                    Keeping your Plaloma will grant you access to the following
                    rewards (read the details in BENEFITS):
                  </p>
                  <ul className="list-disc leading-8 px-8 mt-2">
                    <li>Additional % stake LP token in phc.finance </li>
                    <li>
                      Discounts for tourists in 3000 Venues Phuket Island{" "}
                    </li>
                    <li>VIP access to Phuket's best tourist attractions </li>
                    <li>
                      Final NFT Minting Lottery with a total prize pool of
                      50,000 USD
                    </li>
                    <li>
                      A high potential demand for the purchase of NFTs after the
                      launch in the various marketplaces - Phuket island have
                      10,000,000 visit per year!
                    </li>
                    <li>
                      Free Access to the Meeting Room Phuket Holiday Coin Cafe{" "}
                    </li>
                    <li>
                      Lifetime free access to the VIP Area equipped with sunbed
                      and umbrellas at Phuket Holiday Coin Cafe
                    </li>
                    <li>Charity program</li>
                  </ul>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How many Plaloma can I mint?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl text-white rounded-md shadow-md md:py-5 py-2  font-bold text-base md:text-lg">
                  Each wallet can mint up to 12 Plaloma NFTs. per time
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      Will Plaloma be listed on the secondary market?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl text-white  md:py-5 py-2  text-base md:text-lg">
                  Yup! Once the Plaloma minting is complete, a secondary market
                  will open its doors to trade your Plaloma. Immediately after
                  100% minting, our Plaloma market will be open! Stay tuned.
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      How to regulate the minimum price on the secondary market?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl text-white  md:py-5 py-2  text-base md:text-lg">
                  To ensure that the initial price is stable and does not fall
                  below the mint price, Plaloma NFTs listed below the secondary
                  market minting price will be repurchased. Don't rush to sell
                  your Plaloma below its value, so as not to miss out on bigger
                  rewards in the long run. Other measures will also be
                  implemented to stimulate a healthy floor price. Plaloma
                  holders who have active listings below the mint price (less
                  than 0.25 BNB) on a secondary market, will not be able to
                  benefit from the perks listed above (monthly lottery, airdrop,
                  bonus royalty pool)
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="flex justify-between items-center "
                    onClick={toggle}
                  >
                    <h2 className="text-white text-lg md:text-2xl">
                      Who is behind the project?
                    </h2>
                    <span className="text-blue font-bold">
                      {clicked ? (
                        <BiChevronUp className="text-2xl md:text-4xl font-bold" />
                      ) : (
                        <BiChevronDown className="text-2xl md:text-4xl font-bold" />
                      )}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="md:max-w-5xl text-white md:py-5 py-2  font-bold text-base md:text-lg">
                  Our international team is a sinergy of talented artists,
                  experienced developers, business development, tourism and
                  Blockchain professionals. The Phuket Holiday Coin TEAM is not
                  anonymous unlike many other projects, plus the Phuket Holiday
                  Coin TEAM has received KYC verification. Everyone works hard
                  to make sure our Plaloma community is getting the best
                  experience and benefits, making our project one of a kind. Our
                  team will grow together with the project and the large Phuket
                  Holiday Coin community.
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;

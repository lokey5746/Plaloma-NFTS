import React from "react";

function Benefit() {
  return (
    <section className="benefit" id="benefit">
      <div className="mx-auto w-full py-10 pb-16 px-8 md:max-w-6xl">
        <div>
          <h2 className="md:text-4xl uppercase text-yellow text-3xl text-center">
            Benefit
          </h2>
          <p className="text-xl text-black text-center">
            Owning your Plaloma will grant you access to the following features:
          </p>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-7">
          <div className="col-start-1 col-span-6 md:col-span-3 border-2 p-5 benefit__box">
            <p className="text-center text-base md:text-lg">
              Additional % stake LP token in phc.finance
            </p>
          </div>
          <div className="col-start-7 md:col-start-4 col-span-6 md:col-span-3 border-2 p-5 benefit__box text-center text-base md:text-lg">
            <p>Discounts at over 3000 Venues around Phuket Island</p>
          </div>
          <div className="col-start-1 md:col-start-7 col-span-6 md:col-span-3 border-2 border-white rounded-md p-5 benefit__box text-base text-center md:text-lg">
            <p>VIP access to Phuket's best tourist attractions</p>
          </div>
          <div className="col-start-7 md:col-start-10 col-span-6 md:col-span-3 border-2 border-white rounded-md p-5 text-base md:text-lg text-center benefit__box">
            <p>
              Final NFT Minting Lottery with a total prize pool of 50,000 USD
            </p>
          </div>
          <div className="row-start-2 col-start-1 col-span-12 md:col-span-6 benefit__box p-5">
            <p className="text-center text-base md:text-lg">
              A high potential demand for the purchase of NFTs after the launch
              in various marketplaces. - Phuket Island have 10.000.000 Visit per
              year!
            </p>
          </div>
          <div className="row-start-3 md:row-start-2 md:row-span-2 col-start-1 md:col-start-7 col-span-12 md:col-span-6 benefit__box p-5">
            <h3 className="text-center text-charity">Charity Program</h3>
            <p className="text-base md:text-lg">
              The Foundations are selected between the categories listed here
              below and must be non-profit entities:{" "}
            </p>
            <ul className="list-disc md:text-lg px-10 leading-8">
              <li>Orphanages Schools and scholarships</li>
              <li>Local population food aid</li>
              <li>Marine fauna and flora protection and preservation</li>
              <li>Animal shelters</li>
              <li>Search and Rescue</li>
              <li>Hospitals</li>
            </ul>
          </div>
          <div className="row-start-4 md:row-start-3 row-span-1  benefit__box p-5 col-start-1 col-span-6 md:col-span-3">
            <p className="text-center text-base md:text-lg">
              Free Access to the crypto Meeting Room at Phuket Holiday Cafe
            </p>
          </div>
          <div className="row-start-4 md:row-start-3 row-span-1 benefit__box p-5 col-start-7 md:col-start-4 col-span-6 md:col-span-3">
            <p className="text-base md:text-lg text-center">
              Lifetime free access to the VIP Area equipped with sunbed and
              umbrellas at Phuket Holiday Cafe beach club
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefit;

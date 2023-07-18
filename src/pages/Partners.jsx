import React from "react";
import phuket1 from "../img/phc finance.png";
import phuket2 from "../img/phuketholiday.png";
import phuket3 from "../img/phuket coin.png";

function Partners() {
  return (
    <section className="py-20">
      <div className="">
        <h2 className="text-2xl md:text-4xl text-center text-yellow">
          official Partner
        </h2>
        <div className="flex flex-col md:flex-row justify-center  items-center space-y-10 md:space-y-0 space-x-0 md:space-x-10 mt-5">
          <a href="https://phc.finance" target="_blank">
            <img className="h-20" src={phuket1} alt="" />
          </a>
          <a href="https://t.me/AntoCrypto74" target="_blank">
            <img className="h-20" src={phuket2} alt="" />
          </a>
          <a href="https://phuketholidaycoin.me" target="_blank">
            <img className="h-20" src={phuket3} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Partners;

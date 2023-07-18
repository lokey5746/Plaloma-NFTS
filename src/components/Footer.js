import logo from "../img/logo.png";

import twitter from "../img/twitter.svg";
import discord from "../img/discord.svg";
import telegram from "../img/telegram.svg";
import gitbook from "../img/gitbook.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";

function Footer() {
  return (
    <section>
      <div className="mx-auto md:max-w-6xl px-8 py-10 w-full flex flex-col items-center justify-center space-y-10">
        <img className="h-20" src={logo} alt="Site Logo" />
        <div className="flex flex-col items-center space-y-5">
          <ul className="flex items-center space-x-8">
            <a href="https://twitter.com/CoinPhc" target="_blank">
              <img src={twitter} alt="" />
            </a>
            <a href="https://discord.gg/bF9pH7QX" target="_blank">
              <img src={discord} alt="" />
            </a>
            <a href=" https://t.me/Phuketholidaycoin" target="_blank">
              <img src={telegram} alt="" />
            </a>
            <a href="https://phc.gitbook.io/plaloma-nft/" target="_blank">
              <img src={gitbook} alt="" />
            </a>
            <a href="https://www.facebook.com/CoinPHC" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <a href="https://instagram.com/phuket_holiday_coin" target="_blank">
              <img src={instagram} alt="" />
            </a>
          </ul>
          <a
            href="https://phc.gitbook.io/plaloma-nft/term-and-condition"
            target="_blank"
          >
            Term & Condition
          </a>
          <p className="text-center text-xs md:text-base">
            © 2022 Copyright Phuket Holiday Coin Limited. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

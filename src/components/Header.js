import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

// import twitter from "../assets/img/twitter.svg";
// import discord from "../assets/img/discord.svg";
// import instagram from "../assets/img/instagram.svg";

function Header() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <header className="">
      <div className="mx-auto w-full px-4 py-3 md:py-6 md:max-w-8xl">
        <div className="nav-center">
          <div className="nav-header space-x-10">
            <figure>
              <Link to="/">
                <img src={logo} alt="Logo" className="h-12 md:h-14" />
              </Link>
            </figure>
            <button onClick={() => setShowLinks(!showLinks)}>
              <AiOutlineMenu className="absolute top-8 right-10 cursor-pointer text-2xl text-white md:top-10 xl:hidden" />
            </button>
          </div>
          <div
            className={`${
              showLinks ? "links-container show-container" : "show-container"
            }`}
          >
            <ul className="links text-sm font-semibold text-white xl:space-x-2 md:text-base">
              <li className="links">
                <a
                  onClick={() => setShowLinks(true)}
                  className="link"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="links">
                <a
                  onClick={() => setShowLinks(true)}
                  className="link"
                  href="#roadmap"
                >
                  Roadmap
                </a>
              </li>
              <li className="links">
                <a
                  onClick={() => setShowLinks(true)}
                  className="link"
                  href="#benefit"
                >
                  Benefits
                </a>
              </li>
              <li className="links">
                <a
                  onClick={() => setShowLinks(true)}
                  className="link"
                  href="#trait"
                >
                  Traits
                </a>
              </li>

              <li className="links">
                <a
                  onClick={() => setShowLinks(true)}
                  className="link"
                  href="#team"
                >
                  Team
                </a>
              </li>
              <li className="links">
                <a
                  onClick={() => setShowLinks(true)}
                  className="link"
                  href="#faq"
                >
                  FAQs
                </a>
              </li>
              <li className="links">
                <Link
                  onClick={() => setShowLinks(true)}
                  className="link"
                  to="/mymint"
                >
                  My Mints
                </Link>
              </li>

              <li className="block md:hidden">
                <ul className="flex space-x-3 mt-3">
                  <a
                    href="https://discord.gg/bF9pH7QX"
                    target="_blank"
                    className="   rounded-md bg-green px-2 py-4 text-base uppercase"
                  >
                    Join Discord
                  </a>
                  <Link
                    to="/mint"
                    className="rounded-md bg-yellow px-2 py-4 text-base uppercase"
                  >
                    Mint Here
                  </Link>
                </ul>
              </li>
            </ul>
          </div>

          <div className="social-icons flex items-center space-x-2">
            {/* <div className="flex items-center space-x-2">
              <a href="#" target="_blank">
                <img className="" src={twitter} alt="Instagram" />
              </a>
              <a href="#" target="_blank">
                <img className="" src={discord} alt="Discord" />
              </a>
              <a href="#" target="_blank">
                <img className="" src={instagram} alt="Instagram" />
              </a>
            </div> */}
            <a
              href="https://discord.gg/bF9pH7QX"
              target="_blank"
              className="social-icons join__discord  rounded-md bg-green px-2 py-4 text-base uppercase"
            >
              Join Discord
            </a>
            <Link
              to="/mint"
              className="social-icons join__discord  rounded-md bg-yellow px-2 py-4 text-base uppercase"
            >
              Mint Here
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

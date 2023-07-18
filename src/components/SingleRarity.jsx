import React from "react";
import c1 from "../img/banner/C1.png";
import c2 from "../img/banner/C2.png";
import c3 from "../img/banner/C3.png";
import c4 from "../img/banner/C4.png";
import c5 from "../img/banner/C5.png";

function SingleRarity() {
  return (
    <section className="w-full">
      <div className="flex space-x-14">
        <img className="ml-10" src={c1} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />
        <img className="mr-10" src={c5} alt="" />
      </div>
    </section>
  );
}

export default SingleRarity;

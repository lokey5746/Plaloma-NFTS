import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Mymint() {
  let dispatch = useDispatch();
  const data = useSelector((state) => state.blockchain);
  let [resData, setResData] = useState([]);

  // console.log("data", data.smartContract.methods);
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //   'Content-Type': 'text/plain',
    //   "mode": "no-cors"
    // }
  };
  const get = async () => {
    if (data.account != null) {
      try {
        let responce = await data.smartContract.methods
          .walletOfOwner(data.account)
          .call();
        let mintData = responce.map(async (item) => {
          return await axios.get(
            `http://plaloma.me/metadata/api/getjson/${item}`
          );
        });
        // status: "fulfilled"
        let promiseData = await Promise.allSettled(mintData);
        let fulfiltData = promiseData.filter((item) => {
          return item.status == "fulfilled";
        });
        setResData(fulfiltData);
      } catch (error) {
        console.log("error while fetching my mint image", error);
      }
    }
  };
  console.log("mintData", resData);
  useEffect(() => {
    get();
    return () => {
      setResData({});
    };
  }, []);

  return (
    <section>
      <div className="px-8 md:px-20 py-4 md:py-7 mx-auto mymint">
        <h2 className="text-yellow text-2xl md:text-4xl font-bold text-center">
          My Mint
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-7 md:mt-10">
          {resData?.map((item, i) => {
            return (
              <>
                <figure key={i} className="card__item">
                  <img src={item.value.data.image} alt="" className="p-4" />
                  <h2 className="text-xl ml-4 mb-2 text-black font-semibold">
                    {item.value.data.name}
                  </h2>
                  {/* <div className="flex flex-col px-4 pb-2 space-y-1">
                    {item.value.data.attributes.map((item) => (
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-semibold">
                          {item.trait_type}:
                        </span>
                        <span className="font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div> */}
                </figure>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Mymint;

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(
    `Click on mint to Buy your NFT Token.`
  );
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 4,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Pending`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(`successful`);
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 12) {
      newMintAmount = 12;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className="mint__page h-[100vh]  w-full px-8 pb-20 md:pb-40 md:px-40">
      <div
        className="w-full"
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/mint.png" : null}
      >
        <div className="mx-auto w-full">
          <h2 className="title py-8 text-yellow text-center md:text-4xl uppercase">
            Mint your Plaloma
          </h2>
          <div className="mint__box flex h-full rounded-md bg-white py-4 shadow-lg">
            <div className="flex w-full items-center justify-center  px-6 py-6 md:space-x-10 md:px-10 md:py-8">
              <div className="">
                {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                  <></>
                ) : (
                  <>
                    {blockchain.account === "" ||
                    blockchain.smartContract === null ? (
                      <div className="flex w-full flex-col items-center justify-center">
                        <div className="space-y-4">
                          <h3 className="text-xl text-center text-black md:text-2xl">
                            PUBLIC SALE{" "}
                            <span className="text-yellow">0.15 BNB</span>
                          </h3>
                          <h3 className="font-primary text-center text-sm text-black md:text-lg md:tracking-wider">
                            Connect to the {CONFIG.NETWORK.NAME} Network
                          </h3>
                        </div>

                        <button
                          className="bg-yellow font-primary connect__btn mt-10 rounded-md px-10 py-4 font-bold tracking-wider text-black uppercase border-2 border-black"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          CONNECT Wallet
                        </button>
                        {blockchain.errorMsg !== "" ? (
                          <>
                            <h2 class="font-Opensans mt-5 text-center font-semibold text-white">
                              {blockchain.errorMsg}
                            </h2>
                          </>
                        ) : null}
                      </div>
                    ) : (
                      <div className="flex w-full flex-col items-center justify-center space-y-4 md:space-y-8 ">
                        <div className="space-y-4">
                          <h3 className="text-xl text-center text-black md:text-2xl">
                            PUBLIC SALE{" "}
                            <span className="text-yellow">0.15 BNB</span>
                          </h3>
                          <h2 className="font-primary text-base text-black md:text-xl">
                            {feedback}
                          </h2>
                        </div>
                        <div className="flex items-center space-x-5 md:space-x-10">
                          <button
                            className="h-16 w-20 rounded-lg bg-yellow text-xl font-bold text-black md:w-32 border-2 border-black"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs();
                              getData();
                            }}
                          >
                            {claimingNft ? "Pending" : "Mint"}
                          </button>
                          <button
                            className="connect__btn h-16  w-16 rounded-lg  bg-yellow text-2xl font-semibold text-black border-2 border-black"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            -
                          </button>
                          <div className="h-16 w-16 bg-white rounded-lg border-2 border-black flex flex-col items-center justify-center">
                            <h2 className="text-xl text-black  md:text-2xl">
                              {mintAmount}
                            </h2>
                          </div>

                          <button
                            className="connect__btn h-16 w-16 rounded-lg  bg-white text-2xl font-semibold text-black"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </button>
                        </div>

                        <div className="flex justify-center">
                          <div class="font-primary flex items-center tracking-wider text-black md:mt-6 md:space-x-20 md:text-xl md:font-semibold">
                            <span>
                              Only {CONFIG.MAX_SUPPLY - data.totalSupply} Left
                            </span>
                            <span> Max 12</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;

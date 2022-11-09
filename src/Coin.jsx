import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Coin = () => {
  const[coin, setCoin] = useState({});
  let params = useParams();
  
  useEffect(()=>{
    const fetchCoin = async () =>{
      const url=`https://api.coingecko.com/api/v3/coins/${params.name}`
      const response = await fetch(url);
      const resJson = await response.json();
      setCoin(resJson.description);
    }
    fetchCoin();
  }, [params.name])


  return (
    <>
    <div className="wrapper">
      <div className="l-wrap">
        {/* <img src={coin.image.small} alt="" /> */}
        {/* <h1>{coin.name}</h1> */}
        <p> {coin.description.en}</p>
        {/* <h1>Rank:1</h1>
        <p>{coin.marketData.market_cap_rank}</p>
        <p>{coin.market_data_current_price}</p> */}
      </div>
    </div>
    </>
  );
};

export default Coin;

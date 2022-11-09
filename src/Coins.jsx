import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Coin.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { isHtmlElement } from "react-router-dom/dist/dom";
// const Coin = React.lazy(() => import('./Coin'));

function Coins() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson.data)
      setCoins(resJson);
    };
    fetchApi();
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "rgb(59, 57, 57)",
        color: "white",
        marginTop: "-24px",
      }}
    >
      <h1>Crypto App</h1>
      <div className="coin-search">
        <form action="">
          <input
            type="text"
            className="coin-text"
            placeholder="Enter Coin name"
            onChange={handleChange}
          />
        </form>
      </div>

      {!coins ? (
        <p>No coin found</p>
      ) : (
        <div className="coin-app">
          {filteredCoins.map((coin) => {
            return (
              <VLink to={"/coin/" + coin.id} style={{}}>
              <div className="coin-container" key={coin.id}>
                  <div className="coin-row">
                    <div className="coin">
                      <h1>{coin.name}</h1>
                      <img src={coin.image} alt="crypto" />
                      <p className="coin-symbol"></p>
                    </div>
                    <div className="coin-data">
                      <p className="coin-price"> Rs: {coin.price}</p>
                      {coin.price_change_percentage_24h < 0 ? (
                        <p className="coin-percent red">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      ) : (
                        <p className="coin-percent green">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      )}
                      <p className="coin-marketcap">
                        Mkt Cap: Rs. {coin.market_cap.toLocaleString()}
                      </p>
                    </div>
                  </div>
              </div>
              </VLink>
            );
          })}
        </div>
      )}
    </div>
  );
}


const VLink = styled(NavLink)`
  text-decoration: none;
`;
export default Coins;

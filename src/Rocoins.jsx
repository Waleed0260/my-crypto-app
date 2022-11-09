import React, {useEffect} from 'react'
import { useState } from 'react';
import "./Rocoins.css"
import {motion } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Rocoins() {
    const[coins, setCoins] = useState([])

    useEffect( ()=>{
        const  fetchApi = async()=>{
          const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
          const response = await fetch(url);
          const resJson = await response.json();
          // console.log(resJson.data)
          setCoins(resJson)
        };
        fetchApi();
      }, [])
  return (
    <div className='rocoins'>
        <Splide
            options={{
                arrows: false,
                pagination: false,
                perPage: 7,
                autoplay: true,
                play: true,
          }}
        >
            
      {coins.map((item)=>{
        return(
            <SplideSlide key={item.id}>
            <motion.div className="crypto" >
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
                <h1>{item.current_price}$</h1>
            </motion.div>
            </SplideSlide>
        )
      })}
      </Splide>
    </div>
  )
}

export default Rocoins

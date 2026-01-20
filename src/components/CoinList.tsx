import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { ThemeContext } from "../App";
import CoinCard from "./CoinCard";
import type { CryptoToken } from '../CryptoToken';

const CoinList = () => {
   const context = useContext(ThemeContext);
   const {mode, currency} = context || {};
   const [cryptoCoins, setCryptoCoins] = useState([]);

   async function getCoins() {
      const result = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency?.toLowerCase()}&order=market_cap_desc&per_page=8&page=1`);
      const data = result.data;
      console.log(data);
      setCryptoCoins(data);
   }

   useEffect(() => {
      getCoins();
   }, [currency])

   return (
      <div className={`d-flex justify-content-between flex-wrap ${mode === 0 ? "p-3" : "p-3"}`}>
         {cryptoCoins.map((el:CryptoToken, key) => {
            return <CoinCard key={key} data={el}></CoinCard>;
         })}
      </div>
   );
};

export default CoinList;

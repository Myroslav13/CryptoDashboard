import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { ThemeContext } from "../App";
import CoinCard from "./CoinCard";
import type { CryptoToken } from "../CryptoToken";

const CoinList = () => {
   const context = useContext(ThemeContext);
   const { currency } = context || {};
   const [cryptoCoins, setCryptoCoins] = useState([]);
   const [isOk, setIsOk] = useState<boolean>(true);

   async function getCoins() {
      if (!currency) return;
      try {
         const vs = currency.toLowerCase();
         const result = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs}&order=market_cap_desc&per_page=18&page=1`,
         );
         const data = result.data;
         setCryptoCoins(data);
      } catch (err) {
         setIsOk(false);
      }
   }

   useEffect(() => {
      if (!currency) return;
      getCoins();
   }, [currency]);

   return (
      <div className={"d-flex justify-content-between flex-wrap p-3"}>
         {isOk === true ?
            cryptoCoins.map((el: CryptoToken, key) => {
               return <CoinCard key={key} data={el}></CoinCard>;
            })
            :
            <p>You've got too many requests. Please try again later.</p>
         }
      </div>
   );
};

export default CoinList;

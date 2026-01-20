import "../App.css";
import { useContext, useRef } from "react";
import type { CryptoToken } from "../CryptoToken";
import { ThemeContext } from "../App";

interface CoinCardProps {
   data: CryptoToken;
}

const CoinCard = ({ data }: CoinCardProps) => {
   const context = useContext(ThemeContext);
   const cardRef = useRef<HTMLDivElement>(null);
   
   if (!context) return null;
   const {currency} = context;

   function mouseEnterHandle() {
      if(!cardRef.current) return null;
      cardRef.current.style.width = "12rem";
   }

   function mouseLeaveHandle() {
      if(!cardRef.current) return null;
      cardRef.current.style.width = "10rem";
   }

   return (
      <div className="card mb-2" style={{width: '10rem'}} ref={cardRef} onMouseEnter={() => mouseEnterHandle()} onMouseLeave={() => mouseLeaveHandle()}>
         <img className="card-img-top p-3" src={data.image} alt={data.name} draggable={false}/>
         <div className="card-body border-top">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.current_price} {currency}</p>
         </div>
      </div>
   );
}

export default CoinCard;

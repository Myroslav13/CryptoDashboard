import "../App.css";
import type { CryptoToken } from "../CryptoToken";

interface CoinCardProps {
   data: CryptoToken;
}

function CoinCard({ data }: CoinCardProps) {
   return (
      <div className="card" style={{width: '10rem'}}>
         <img className="card-img-top p-3" src={data.image} alt={data.name} draggable={false}/>
         <div className="card-body border-top">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.current_price}</p>
         </div>
      </div>
   );
}

export default CoinCard;

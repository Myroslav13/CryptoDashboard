import { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../App";

const Navbar = () =>{
   const context = useContext(ThemeContext);
   const {mode, setCurrency, setMode} = context || {};

   return (
      <div className={`d-flex justify-content-between align-items-center p-3 ${mode === 0? "bg-orange":"bg-black"}`}>
         <div>
            <h1>Crypto Dashboard</h1>
         </div>
         <div className="d-flex gap-2">
            <div className="dropdown">
               <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
               >
                  Choose currency
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                     <a className="dropdown-item" href="#" onClick={() => setCurrency?.("USD")}>
                        USD
                     </a>
                  </li>
                  <li>
                     <a className="dropdown-item" href="#" onClick={() => setCurrency?.("UAH")}>
                        UAH
                     </a>
                  </li>
                  <li>
                     <a className="dropdown-item" href="#" onClick={() => setCurrency?.("EUR")}>
                        EUR
                     </a>
                  </li>
               </ul>
            </div>

            <div className="dropdown">
               <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
               >
                  Choose style mode
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                     <a className="dropdown-item" href="#" onClick={() => setMode?.(0)}>
                        Light
                     </a>
                  </li>
                  <li>
                     <a className="dropdown-item" href="#" onClick={() => setMode?.(1)}>
                        Dark
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Navbar;

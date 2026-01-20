import { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../App";

const Navbar = () =>{
   const context = useContext(ThemeContext);
   const {setCurrency, setMode} = context || {};

   return (
      <div className="d-flex justify-content-between align-items-center p-3 bg-orange">
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
                  Виберіть валюту
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
                  Виберіть режим
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                     <a className="dropdown-item" href="#" onClick={() => setMode?.(0)}>
                        Світлий
                     </a>
                  </li>
                  <li>
                     <a className="dropdown-item" href="#" onClick={() => setMode?.(1)}>
                        Темний
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Navbar;

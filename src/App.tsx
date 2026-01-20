import { useState, createContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CoinList from "./components/CoinList";

export interface ContextTheme {
   currency: string,
   setCurrency: (currency: string) => void,
   mode: number,
   setMode: (theme: number) => void
}

export const ThemeContext = createContext<ContextTheme | undefined>(undefined);

function App() {
   const [mode, setMode] = useState<number>(0);
   const [currency, setCurrency] = useState<string>("USD");

   return (
      <>
         <ThemeContext.Provider value={{currency, setCurrency, mode, setMode}}>
            <Navbar />
            <CoinList />
         </ThemeContext.Provider>
      </>
   );
}

export default App;
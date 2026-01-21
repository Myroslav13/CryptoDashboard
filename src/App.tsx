import { useState, createContext, useEffect } from "react";
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

type Currency = "USD" | "EUR" | "UAH" | null;

function App() {
   const [mode, setMode] = useState<number>(() => {
      return Number(localStorage.getItem("mode") ?? 0)
   });
   const [currency, setCurrency] = useState<string>(() => {
      return (localStorage.getItem("currency") as Currency) ?? "USD";
   });

   useEffect(() => {
      localStorage.setItem("currency", currency);
   }, [currency]);

   useEffect(() => {
      localStorage.setItem("mode", mode.toString());
   }, [mode]);

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
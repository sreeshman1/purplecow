import { createContext, useState } from "react";
import CountButton from "./components/CountButton";
import fearlessLogo from "./assets/fearlessLogo.png";
import "./App.css";

export const CountContext = createContext(0);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="logo-div">
        <img src={fearlessLogo} alt="Fearless logo" />
      </div>
      <CountContext.Provider value={{ count, setCount }}>
        <CountButton />
        <p>Current Count: {count} </p>
      </CountContext.Provider>
    </div>
  )
}

export default App

import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ code }) => code === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <div className="app">
      <Form 
        result={result} 
        calculateResult={calculateResult} />
    </div>
  );
}

export default App;

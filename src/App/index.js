import { useState } from "react";
import { Container } from "./styled";
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
    <Container>
      <Form 
        result={result} 
        calculateResult={calculateResult} 
      />
    </Container>
  );
}

export default App;

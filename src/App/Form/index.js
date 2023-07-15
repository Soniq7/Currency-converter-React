import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { useRatesData } from "./useRatesData";
import {
  StyledForm,
  Fieldset,
  Legend,
  LabelContent,
  Field,
  Button,
  Loading,
  Error,
  Wrapper,
} from "./styled";

export const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Currency Converter</Legend>
        <Clock />
        {ratesData.status === "loading" ? 
          (
            <Loading>
              One moment please...<br />
              Loading currency exchange rates from European Central Bank... 😎
            </Loading>
          ) : ratesData.status === "error" ? 
          (
            <Error>
              Oops! Looks like something went wrong... 🤔<br />
              Please check your internet connection.<br />
              If you're connected to the internet... it's obviously fault on our
              side.<br />
              Please try again later... 😉
            </Error>
          ) : 
          (
            <>
              <p>
                <label>
                  <LabelContent>Amount in GBP * :</LabelContent>
                  <Field
                    as="input"
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Enter amount in GBP"
                    type="number"
                    name="amount"
                    required
                    step="0.01"
                    min="0.01"
                  />
                </label>
              </p>
              <p>
                <label>
                  <LabelContent>Currency :</LabelContent>
                  <Field
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                  >
                    {Object.keys(ratesData.rates).map((currency) => (
                        <option 
                          key={currency} 
                          value={currency}
                        >
                          {currency}
                        </option>
                      ))}
                  </Field>
                </label>
              </p>
              <p>
                <Button>Convert</Button>
              </p>
              <Wrapper>
                Exchange rates are taken from the European Central Bank.<br />
                Rates dated: <strong>{ratesData.date}</strong>
              </Wrapper>
              <Result result={result} />
            </>
          )
        }
      </Fieldset>
    </StyledForm>
  );
};

export default Form;

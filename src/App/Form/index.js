import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import {
  StyledForm,
  Fieldset,
  Legend,
  LabelContent,
  Field,
  Button,
} from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].code);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Currency Converter
        </Legend>
        <Clock />
        <p>
          <label>
            <LabelContent>
              Amount in GBP * :
            </LabelContent>
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
            <LabelContent>
              Currency :
            </LabelContent>
            <Field
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} {currency.name}
                </option>
              ))}
            </Field>
          </label>
        </p>
        <p>
          <Button>
            Convert
          </Button>
        </p>
        <Result result={result} />
      </Fieldset>
    </StyledForm>
  );
};

export default Form;

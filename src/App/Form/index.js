import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].code);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency Converter</legend>

        <Clock />
        <p>
          <label>
            <span className="form__label"> Amount in GBP * :</span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Enter amount in GBP"
              className="form__field"
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
            <span className="form__label"> Currency : </span>
            <select
              className="form__field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__field form__field--mandatory">
          * Mandatory fields
          <br />
          <span className="form__field form__field--pattern">
            (for float numbers please use dot ".")
          </span>
        </p>
      </fieldset>
      <p>
        <button className="form__button">Convert</button>
      </p>

      <Result result={result} />
    </form>
  );
};

export default Form;

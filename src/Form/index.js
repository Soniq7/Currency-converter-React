import { useState } from "react";
import "./style.css";
import currencies from "./currencies";

function Form() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const calculateResult = () => {
    const selectedCurrency = currencies.find(({ code }) => code === currency);
    if (selectedCurrency) {
      return amount * selectedCurrency.rate;
    }
    return null;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const result = calculateResult();
    setResult(result);
    setSelectedCurrency(currency);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency Converter</legend>
        <p>
          <label>
            <span className="form__label"> Amount in GBP * :</span>
            <input
              amount={amount}
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
              currency={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.id} value={currency.code}>
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
      <p className="form__result">
        {result !== null && (
          <>
            {amount} GBP ={" "}
            <strong>
              {result.toFixed(2)} {selectedCurrency}
            </strong>
          </>
        )}
        <span className="form__result form__result--link">
          <br />
          British Pound exchange rates come from x-rates.com table dated
          29-03-2023:
          <br />
          <a
            className="form__result form__result--website"
            href="https://www.x-rates.com/table/?from=GBP&amount=1"
          >
            "BRITISH POUND EXCHANGE RATES TABLE"
          </a>
        </span>
      </p>
    </form>
  );
}

export default Form;
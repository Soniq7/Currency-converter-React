import Container from "./Container";

function App() {
  return (
    <Container>
    <form class="form js-form">
      <fieldset class="form__fieldset">
        <legend class="form__legend">Currency converter</legend>
        <p>
          <label>
            <span class="form__label"> Amount in GBP * : </span>
            <input
              placeholder="Enter amount in GBP"
              class="form__field js-amount"
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
            <span class="form__label"> Currency : </span>
            <select class="form__field js-currency">
              <option value="EUR" selected>EUR Euro</option>
              <option value="PLN">PLN Polish Zloty</option>
              <option value="USD">USD US Dollar</option>
            </select>
          </label>
        </p>
        <p class="form__field form__field--mandatory">
          * Mandatory fields<br />
          <span class="form__field form__field--pattern">
            (for float numbers please use dot ".")
          </span>
        </p>
      </fieldset>
      <p>
        <button class="form__button">Convert</button>
      </p>
      <p class="form__result js-result">Result :</p>
    </form>
    <div class="link">
      <p>
        For more currency exchange information please check website:<br />
        <a
          class="link__website"
          href="https://www.x-rates.com/table/?from=GBP&amount=1"
          >"BRITISH POUND EXCHANGE RATES TABLE"
        </a>
      </p>
    </div>
  </Container>
  );
}

export default App;

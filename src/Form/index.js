import "./style.css";

const Form = () => {
    return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency converter</legend>
        <p>
          <label>
            <span className="form__label"> Amount in GBP * : </span>
            <input
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
            <select className="form__field">
              <option value="EUR" selected>EUR Euro</option>
              <option value="PLN">PLN Polish Zloty</option>
              <option value="USD">USD US Dollar</option>
            </select>
          </label>
        </p>
        <p className="form__field form__field--mandatory">
          * Mandatory fields<br />
          <span className="form__field form__field--pattern">
            (for float numbers please use dot ".")
          </span>
        </p>
      </fieldset>
      <p>
        <button className="form__button">Convert</button>
      </p>
      <p className="form__result">Result :</p>
    </form>
    );
};

export default Form;
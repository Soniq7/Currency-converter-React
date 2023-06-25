import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {result !== null && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;GBP&nbsp;=
        {" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
    <span className="result__link">
      <br />
      British Pound exchange rates come from x-rates.com table dated 29-03-2023:
      <br />
      <a
        className="result__website"
        href="https://www.x-rates.com/table/?from=GBP&amount=1"
      >
        "BRITISH POUND EXCHANGE RATES TABLE"
      </a>
    </span>
  </p>
);


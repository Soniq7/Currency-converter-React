import "./style.css";

const Link = () => {
  return (
    <div className="link">
      <p>
        For more currency exchange information please check website:
        <br />
        <a
          className="link__website"
          href="https://www.x-rates.com/table/?from=GBP&amount=1"
        >
          "BRITISH POUND EXCHANGE RATES TABLE"
        </a>
      </p>
    </div>
  );
};

export default Link;
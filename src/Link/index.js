import "./style.css";

const Link = () => {
  return (
    <div className="link">
      <p>
        British Pound exchange rates come from <br />x-rates.com table dated 29-03-2023:<br />
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
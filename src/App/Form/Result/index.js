import { StyledResult, Wrapper, Link, Amount } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
    <Wrapper>
      British Pound exchange rates come from{" "}
      <Link as="a"
        className="result__link--website"
        href="https://www.x-rates.com/table/?from=GBP&amount=1"
      >
        x-rates.com
      </Link>{" "}
      table dated 29-03-2023
    </Wrapper>
    <Amount>
      {result !== null && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;GBP&nbsp;={" "}
          <strong>
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
        </>
      )}
    </Amount>
  </StyledResult>
);

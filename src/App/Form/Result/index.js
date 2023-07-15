import { StyledResult, Amount } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
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

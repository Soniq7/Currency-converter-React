import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
      {result !== null && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;GBP&nbsp;={" "}
          <strong>
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
        </>
      )}
  </StyledResult>
);

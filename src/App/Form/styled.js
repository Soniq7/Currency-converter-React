import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 80px auto 100px;
  max-width: 800px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.color.stratos};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.pigeonPost};
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.stratos};
  color: ${({ theme }) => theme.color.white};
  border: 1.75px solid ${({ theme }) => theme.color.matisse};
  border-radius: 5px;
  padding: 10px 50px;
`;

export const LabelContent = styled.span`
  display: inline-block;
  padding: 10px;
  max-width: 300px;
  width: 100%;
  font-weight: bold;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
`;

export const Field = styled.select`
  border: 1px solid ${({ theme }) => theme.color.mineShaft};
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  padding: 5px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.stratos};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.matisse};
  border-radius: 10px;
  margin: 30px 0 auto;
  padding: 10px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(130%);
  }
`;

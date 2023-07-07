import styled from "styled-components";

export const StyledResult = styled.div`
  text-align: center;
`;

export const Wrapper = styled.span`
  font-size: small;
  color: ${({ theme }) => theme.color.darkNavy};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.lighterBlue};
  text-decoration: none;
  font-weight: bold;

  &:visited {
    color: ${({ theme }) => theme.color.lightNavy};
  }

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }

  &:active {
    color: ${({ theme }) => theme.color.lightBlue};
  }
`;

export const Amount = styled.p`
  margin: 30px;
`;

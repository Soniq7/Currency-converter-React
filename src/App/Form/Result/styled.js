import styled from "styled-components";

export const StyledResult = styled.div`
  text-align: center;
`;

export const Wrapper = styled.span`
  font-size: small;
  border: none;
  color: rgb(1, 0, 51);
`;

export const Link = styled(Wrapper)`
  color: rgb(0, 85, 182);
  text-decoration: none;
  font-weight: bold;

  &:visited {
    color: rgb(15, 1, 120);
  }

  &:hover {
    color: rgb(15, 1, 200);
  }

  &:active {
    color: rgb(15, 32, 250);
  }
`;

export const Amount = styled.p`
  margin: 30px;
`;

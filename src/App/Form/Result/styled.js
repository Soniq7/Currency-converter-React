import styled from "styled-components";

export const StyledResult = styled.div`
  text-align: center;
`;

export const Wrapper = styled.span`
  font-size: small;
  color: ${({ theme }) => theme.color.stratos};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.navyBlue};
  text-decoration: none;
  font-weight: bold;

  &:visited {
    filter: brightness(90%);
  }

  &:hover {
    filter: brightness(150%);
  }

  &:active {
    filter: brightness(200%);
  }
`;

export const Amount = styled.p`
  margin: 30px;
`;

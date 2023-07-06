import { createGlobalStyle } from "styled-components";
import background from "./background-image.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
    box-sizing: inherit;
    }

    #root {
    font-family: "Montserrat", sans-serif;
        font-size: 20px;
        line-height: 1.5;
        background-image: url("${background}");
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
    }

`;
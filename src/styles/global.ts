import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #6b4ea5;

    /* Adobe XD */
    --yellow: #FFAF3E;
    --cold-grey-40: #C4C8CC;
    --red-medium: #F27480;
    --black80: #585756;
    --black60: #828180;
    --black20-disable-: #D5D5D5;
    --black10: #EAEAE9;
    --green-dark: #008768;
    --green-light: #DBFAF3;
    --unnamed-color-707070: #707070;
    --blue: #3570B2;
    --white: #FFFFFF;
    --grey-40: #ABABAB;
    --cold-grey: #EBF0F5;
    --red: #E65562;
    --black-100: #2E2D2C;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple-40: #6B4EA5;
    --purple-60: #5A5789;
    --purple-80:  #2D2C45;
    --grey-10: #F3F3F3;
    --black-100-transparency: #2e2d2c66;

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
    color: var(--black-100);
  }

  body, input, textarea, button, select {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  h1 {
    font-weight: 700;
    font-size: 1.6rem;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

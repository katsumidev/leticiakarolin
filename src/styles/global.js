import { createGlobalStyle } from "styled-components";

import BrandonMed from "../fonts/Brandon_light.otf";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Brandon Light';
        src: local('Brandon Light'), local('BrandonLight'),
             url(${BrandonMed}) format('opentype'); /* Alterei 'otf' para 'opentype' */
        font-weight: 300;
        font-style: normal;
    }

    body {
        font-family: 'Brandon Light', sans-serif;
        overflow-x: hidden;
    }
`;

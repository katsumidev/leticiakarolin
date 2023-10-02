import { createGlobalStyle } from "styled-components";

import BrandonMed from "../fonts/Brandon_light.otf";
import High_Spirited from "../fonts/High_Spirited.ttf"
import LaLuxesScript from "../fonts/LaLuxesScript-Regular.otf"
import LaLuxesSerif from "../fonts/LaLuxesSerif-Regular.otf"
import Brandon_bld from "../fonts/Brandon_bld.otf"

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

    @font-face {
        font-family: "High Spirited";
        src: local('High Spirited'), local('HighSpirited'),
            url(${High_Spirited}) format('opentype');
    }

    @font-face {
        font-family: 'Brandon Bold';
        src: url(${Brandon_bld}) format('opentype');
    }

    @font-face {
        font-family: "LaLuxesScript";
        src: local('LaLuxesScript'), local('LaLuxesScript'),
            url(${LaLuxesScript}) format('opentype');
        font-weight: 300;
    }

    @font-face {
        font-family: "LaLuxesSerif";
        src: local('LaLuxesSerif'), local('LaLuxesSerif'),
            url(${LaLuxesSerif}) format('opentype');
        font-weight: 300;
    }


    body {
        font-family: 'Brandon Light', sans-serif;
        overflow-x: hidden;
    }
`;

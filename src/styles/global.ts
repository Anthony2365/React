import styled from "styled-components";
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0:
        outilene: 0:
        box-sizing: border-box;

    }

    body{
        background: #F0F0F5;
    }

    body , imput , button {
        font: 16px Roboto, sans-serif;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button{
        cursor: pointer;
    }
`;
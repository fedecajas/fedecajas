import css from 'styled-jsx/css';

import { fonts, sizes, colors, breakpoints, landscape } from '@styles/config';

const globals = css.global`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-family: ${fonts.text};
        font-size: ${sizes.fontSize};
        color: ${colors.blackColor};
        background-color: ${colors.whiteColor};
        box-sizing: border-box;
        animation-name: fadeIn;
        animation-duration: 1.8s;
        will-change: opacity, transform;
    }

    main {
        height: 100%;
        min-height: max-content;
    }

    header {
        width: 100%;
        flex-direction: column;
        height: max-content;
        display: flex;
        z-index: ${landscape.raiz};
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
        color: ${colors.whiteColor}
    }

    a:focus, a:active {
        border: none;
        outline: none;
    }

    ul {
        list-style: none;
    }

    p {
        text-align: justify;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
        transition: .1s;
        background-color: transparent;
        padding: ${sizes.paddingGlobal} / 2;
    }

    button:hover {
        transform: scale(1.1)
    }

    button:active {
        transform: scale(1)
    }

    footer {
        flex-wrap: wrap;
        text-align: center;
        padding: calc(${sizes.paddingGlobal} * 4) 0;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(100px);
            transform: scale(.9);
        }
        70% {
            opacity: .5
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            transform: scale(1);
        }
    }
`;

export default globals;
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');

    :root {
        --bg-color: #22272E;
        --txt-color: #fff;
        --black-txt-color: #272727;
        --danger: #C96868;
        --link: #FADFA1;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Fredoka", sans-serif;
        font-optical-sizing: auto;
    }

    body {
        background-color: var(--bg-color);
        color: var(--txt-color);
    }
`;
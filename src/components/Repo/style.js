import styled from "styled-components";

export const RepoContainer = styled.div`
    width: 80%;
    
    h3 {
        margin-top: 20px;
        font-size: 2rem;
        color: var(--txt-color);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .link {
        font-size: 1.2rem;
        color: var(--txt-color);
        opacity: 0.6;
    }

    button {
        color: var(--danger);
        background-color: transparent;
        width: min-content;
        padding: 12px 8px;
        border-radius: 12px;
        border: 1px solid var(--danger);
        cursor: pointer;
        font-size: 1.2rem;
        transition: 200ms;
    } 

    button:hover {
        opacity: 0.6;
    }

    hr {
        color: var(--txt-color);
        opacity: 0.6;
        margin: 20px 0;
    }
`
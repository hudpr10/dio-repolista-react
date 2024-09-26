import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid var(--txt-color);
    border-radius: 20px;

    height: 62px;
    width: 80%;
    margin-top: 20px;
    
    input {
        background-color: transparent;
        border: none;
        height: 62px;
        width: 100%;
        padding: 0 20px;
        color: var(--txt-color);
        outline: none;
        font-size: 1.5rem;
    }
`
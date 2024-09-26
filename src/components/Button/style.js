import styled from "styled-components";

export const ButtonStyled = styled.button`
    border: 1px solid var(--txt-color);
    background-color: var(--txt-color);
    border-radius: 20px;

    height: 62px;
    width: 20%;
    margin-top: 20px;
    
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--black-txt-color);
    transition: 200ms;

    &:hover {
        opacity: 0.6;
    }
`
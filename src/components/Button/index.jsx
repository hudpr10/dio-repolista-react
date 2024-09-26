import { ButtonStyled } from "./style";

function Button({ handleClick }) {
    return (
        <ButtonStyled onClick={handleClick}>Buscar</ButtonStyled>
    )
}

export default Button;
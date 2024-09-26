import { InputContainer } from "./style"

function Input({ handleChange, currentValue }) {
    return (
        <InputContainer>
            <input onChange={handleChange} value={currentValue} placeholder="user/repo" />
        </InputContainer>
    )
}

export default Input
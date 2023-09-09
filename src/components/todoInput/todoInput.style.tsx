import styled from 'styled-components';

export const InputContainer = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding: 15px;
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    margin: 20px;
    border-radius: 10px;
`

export const StyledInput = styled.input`
    font-size: 15px;
    font-weight: lighter;
    color: #3b3b3b;
    border: none;
    background-color: white;
    width: 80%;

    &:focus{
        outline: none;
    }
`
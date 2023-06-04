import styled, { css } from "styled-components";

export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    myColor: ButtonColor; 
}

const buttonColors = {
    primary: 'orange',
    secondary: 'blue',
    danger: 'red',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    ${props => {
        return css`background-color: ${buttonColors[props.myColor]}`
    }}
`
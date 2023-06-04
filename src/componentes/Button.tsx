import { ButtonColor, ButtonContainer } from './Button.styles';

interface ButtonProps {
    myColor?: ButtonColor;
}

export function Button({myColor = 'primary'}: ButtonProps) {
    return (
        <ButtonContainer myColor={myColor}>Botão</ButtonContainer>
    );
}
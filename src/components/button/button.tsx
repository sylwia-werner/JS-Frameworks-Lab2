import * as S from "./button.style";

export type ButtonVariant = "primary" | "secondary";

interface Props {
    onClick: () => void;
    variant: ButtonVariant;
    type: "button" | "submit" | "reset";
}

export const Button = ({ onClick, variant, type = "button" }: Props) => {
    return (
        <S.Button variant={variant} type={type} onClick={onClick}>
            Click me
        </S.Button>
    );
};

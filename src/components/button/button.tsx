import { ReactNode } from "react";
import * as S from "./button.style";

export type ButtonVariant = "primary" | "secondary";

interface Props {
    onClick?: () => void;
    variant: ButtonVariant;
    type: "button" | "submit" | "reset";
    children: ReactNode;
}

export const Button = ({
    onClick,
    variant,
    type = "button",
    children,
}: Props) => {
    const handleClick = () => {
        onClick?.();
    };
    return (
        <S.Button variant={variant} type={type} onClick={handleClick}>
            {children}
        </S.Button>
    );
};

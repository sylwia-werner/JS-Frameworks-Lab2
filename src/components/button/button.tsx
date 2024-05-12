import * as S from "./button.style";

export type ButtonVariant = "primary" | "secondary";

interface Props {
    onClick: () => void;
    variant: ButtonVariant;
}

export const Button = ({ onClick, variant }: Props) => {
    return <S.Button variant={variant}>Click me</S.Button>;
};

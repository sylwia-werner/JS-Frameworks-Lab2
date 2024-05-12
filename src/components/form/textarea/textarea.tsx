import { ChangeEvent } from "react";
import * as S from "./textarea.style";

interface Props {
    id: string;
    label: string;
    error?: string;
    fullWidth: boolean;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
    maxLength?: number;
    required?: boolean;
    minHeight?: number;
}
export const TextArea = ({
    id,
    label,
    error,
    fullWidth = false,
    name,
    value,
    maxLength,
    onChange,
    required,
    minHeight,
}: Props) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        onChange(e);
    };
    return (
        <S.Container $fullWidth={fullWidth}>
            <S.Label htmlFor={id}>{label}</S.Label>
            <S.Input
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
                required={required}
                $minHeight={minHeight}
            />
            <S.ErrorLabel>{error}</S.ErrorLabel>
        </S.Container>
    );
};

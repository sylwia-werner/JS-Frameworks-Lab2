import { ChangeEvent, useState } from "react";
import * as S from "./text-input.style";

interface Props {
    id: string;
    label: string;
    error?: string;
    fullWidth: boolean;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    maxLength?: number;
    required?: boolean;
}
export const TextInput = ({
    id,
    label,
    error,
    fullWidth = false,
    name,
    value,
    maxLength,
    onChange,
    required,
}: Props) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e);
    };
    return (
        <S.Container $fullWidth={fullWidth}>
            <S.Label htmlFor={id}>{label}</S.Label>
            <S.Input
                id={id}
                name={name}
                type="text"
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
                required={required}
            />
            <S.ErrorLabel>{error}</S.ErrorLabel>
        </S.Container>
    );
};

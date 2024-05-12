import { ChangeEvent } from "react";
import * as S from "./number-input.style";

interface Props {
    id: string;
    label: string;
    error?: string;
    fullWidth: boolean;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
    minLength?: number;
    maxLength?: number;
    groupText?: string;
}
export const NumberInput = ({
    id,
    label,
    error,
    fullWidth = false,
    name,
    value,
    minLength,
    maxLength,
    groupText,
    onChange,
}: Props) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e);
    };
    return (
        <S.Container>
            <S.Label htmlFor={id}>{label}</S.Label>

            {groupText ? (
                <S.GroupContainer $fullWidth={fullWidth}>
                    <S.Input
                        id={id}
                        name={name}
                        type="number"
                        value={value}
                        onChange={handleChange}
                        min={minLength}
                        max={maxLength}
                        $fullWidth={fullWidth}
                        $group={!!groupText}
                        step="0.01"
                    />
                    <S.GroupBox>
                        <S.GroupText>{groupText}</S.GroupText>
                    </S.GroupBox>
                </S.GroupContainer>
            ) : (
                <S.Input
                    id={id}
                    name={name}
                    type="number"
                    value={value}
                    onChange={handleChange}
                    min={minLength}
                    max={maxLength}
                    $fullWidth={fullWidth}
                    step="0.01"
                />
            )}

            <S.ErrorLabel>{error}</S.ErrorLabel>
        </S.Container>
    );
};

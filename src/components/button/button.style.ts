import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const Button = styled.button<{ variant: string }>`
    ${({ variant }) => css`
        background-color: ${variant === "primary" ? "#007bff" : "#6c757d"};
        border: 1px solid ${variant === "primary" ? "#007bff" : "#6c757d"};

        &:focus {
            box-shadow: 0 0 0 0.2rem
                ${variant === "primary"
                    ? "rgba(0, 123, 255, .5)"
                    : "rgba(108, 117, 125, .5)"};
        }

        &:active,
        &:hover {
            background-color: ${variant === "primary" ? "#0069d9" : "#5a6268"};
            border-color: ${variant === "primary" ? "#0069d9" : "#5a6268"};
        }
    `}
    padding: ${pxToRem(6)} ${pxToRem(12)};
    color: white;
    border-radius: ${pxToRem(4)};
`;

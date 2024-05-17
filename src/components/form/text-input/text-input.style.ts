import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div<{ $fullwidth: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "auto")};
`;

export const Label = styled.label`
    font-weight: 600;
    color: #555;
    margin-bottom: ${pxToRem(6)};
`;

export const Input = styled.input`
    border: 1px solid #ced4da;
    border-radius: ${pxToRem(3)};
    padding: ${pxToRem(4)};
    font-size: ${pxToRem(14)};
    padding: ${pxToRem(8)};
`;

export const ErrorLabel = styled.span``;

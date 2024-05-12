import { pxToRem } from "./../../../utils/pxToRem";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-weight: 600;
    color: #555;
    margin-bottom: ${pxToRem(6)};
`;

export const Input = styled.input<{ $fullWidth: boolean; $group?: boolean }>`
    border: 1px solid #ced4da;
    border-radius: ${pxToRem(3)};
    font-size: ${pxToRem(14)};
    padding: ${pxToRem(8)};
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

    ${({ $group }) =>
        $group &&
        `
        border-radius: ${pxToRem(3)} 0 0 ${pxToRem(3)};
        border-right: none;
    `}
`;

export const ErrorLabel = styled.span``;

export const GroupContainer = styled.div<{ $fullWidth: boolean }>`
    display: flex;
    align-items: center;
`;

export const GroupBox = styled.div`
    padding: ${pxToRem(8)};
    font-size: ${pxToRem(14)};
    border: 1px solid #ced4da;
    border-radius: 0 ${pxToRem(3)} ${pxToRem(3)} 0;
    background-color: #e9ecef;
`;

export const GroupText = styled.span`
    white-space: nowrap;
`;

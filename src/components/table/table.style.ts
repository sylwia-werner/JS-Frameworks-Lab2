import styled, { css } from "styled-components";

const cellStyle = css`
    padding: 0.75rem;
    vertical-align: top;
`;

export const Table = styled.table`
    white-space: nowrap;
    border-collapse: collapse;
    width: 100%;
`;
export const Thead = styled.thead`
    text-align: left;
    border-bottom: 2px solid black;
`;

export const TrHead = styled.tr`
    border-bottom: 1px solid black;
`;

export const Tr = styled.tr`
    & + tr {
        border-top: 1px solid #dee2e6;
    }
`;

export const Th = styled.th`
    ${cellStyle}
`;
export const Td = styled.td`
    ${cellStyle}
`;
export const TFoot = styled.tfoot`
    text-align: right;
    border-top: 2px solid black;
    border-bottom: 1px solid #dee2e6;
`;

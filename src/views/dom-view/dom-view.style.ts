import { pxToRem } from "./../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
`;

export const RangeInput = styled.input`
    margin-right: ${pxToRem(20)};
    margin-bottom: ${pxToRem(100)};
`;

export const Circle = styled.div<{ radius: number }>`
    ${({ radius }) =>
        radius &&
        css`
            width: ${pxToRem(radius)};
            height: ${pxToRem(radius)};
        `}
    background-color: blue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

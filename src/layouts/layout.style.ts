import styled from "styled-components";
import { pxToRem } from "../utils/pxToRem";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    min-height: calc(100vh - ${pxToRem(80)});
    width: ${pxToRem(1000)};
    max-width: 100%;
    padding: 2rem;
    margin: auto;
`;

export const Container = styled.div`
    background-color: #f0f7ff;
`;

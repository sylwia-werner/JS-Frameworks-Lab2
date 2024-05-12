import { Table } from "./../../components/table/table.style";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const Container = styled.div`
    width: 100%;
    background-color: white;
    border-radius: ${pxToRem(4)};
    padding: 2rem;

    @media (max-width: 800px) {
        padding: 2rem 1rem;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`;

export const H2 = styled.h2`
    font-weight: 600;
    color: #333;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
`;

export const Hr = styled.hr`
    margin: 1rem 0;
`;

export const TableContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    overflow-x: auto;
    margin-top: 1rem;
`;

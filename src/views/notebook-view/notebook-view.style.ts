import styled from "styled-components";
import { Container as DomViewContainer } from "../form-view/form-view.style";
import { pxToRem } from "../../utils/pxToRem";

export const Container = styled(DomViewContainer)``;

export const NotebookContainer = styled.div`
    display: flex;
    margin-top: 2rem;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const ListPanel = styled.div`
    max-width: ${pxToRem(250)};
    width: 100%;
`;

export const EditorPanel = styled.div`
    width: 100%;
    @media (max-width: 700px) {
        margin-top: 2rem;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
`;
export const List = styled.ul`
    padding-left: 1rem;
`;

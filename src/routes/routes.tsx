import React from "react";

import { Route, Routes as RoutesContainer } from "react-router-dom";
import { DomView } from "../views/dom-view/dom-view";
import { FormView } from "../views/form-view/form-view";
import { NotebookView } from "../views/notebook-view/notebook-view";

export const Routes = () => {
    return (
        <RoutesContainer>
            <Route path="/" element={<DomView />} />
            <Route path="/form" element={<FormView />} />
            <Route path="/notebook" element={<NotebookView />} />
        </RoutesContainer>
    );
};

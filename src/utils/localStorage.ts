import { Note } from "../views/notebook-view/notebook-view";

export const saveLocalStorageNotes = (notes: Note[]): void => {
    return localStorage.setItem("notes", JSON.stringify(notes));
};

export const getLocalStorageNotes = (): Note[] => {
    return JSON.parse(localStorage.getItem("notes") || "[]");
};

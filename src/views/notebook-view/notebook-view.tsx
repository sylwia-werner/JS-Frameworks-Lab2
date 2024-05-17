import { useEffect, useState } from "react";
import { TextInput } from "../../components/form/text-input/text-input";
import { Layout } from "../../layouts/layout";
import * as S from "./notebook-view.style";
import { TextArea } from "../../components/form/textarea/textarea";
import { Button } from "../../components/button/button";
import {
    getLocalStorageNotes,
    saveLocalStorageNotes,
} from "../../utils/localStorage";
import { v4 as uuidv4 } from "uuid";

export type Note = {
    name: string;
    content: string;
    id: string;
};

type Form = {
    name: string;
    content: string;
};

export const NotebookView = () => {
    const [form, setForm] = useState<Form>({
        name: "",
        content: "",
    });

    const [notes, setNotes] = useState<Note[]>([]);
    const [editNote, setEditNote] = useState<{ id: string } | null>(null);

    const findNote = (id: string) => notes.find((note) => id === note.id);

    useEffect(() => {
        const storedNotes = getLocalStorageNotes();

        if (storedNotes) {
            setNotes(storedNotes);
        }
    }, []);

    const handleInputChange = (e: string, fieldName: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: e,
        }));
    };

    const clearForm = () => {
        setForm({ name: "", content: "" });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editNote?.id) {
            const editedNoteIndex = notes.findIndex(
                (note) => note.id === editNote.id,
            );

            if (editedNoteIndex !== -1) {
                const updatedNotes = [...notes];
                updatedNotes[editedNoteIndex] = { ...form, id: editNote.id };

                console.log(updatedNotes, "UPDATED");

                setNotes(updatedNotes);

                setEditNote(null);
                clearForm();

                return;
            }
            return;
        }

        console.log("save new");

        setNotes((prevData) => [...prevData, { ...form, id: uuidv4() }]);

        clearForm();
    };

    const handleEditMode = (id: string) => {
        const foundNote = findNote(id);

        if (!foundNote) {
            return;
        }

        setEditNote({ id });

        setForm({
            name: foundNote.name,
            content: foundNote.content,
        });
    };

    useEffect(() => {
        if (notes.length !== 0) {
            saveLocalStorageNotes(notes);
        }
    }, [notes, setNotes]);

    return (
        <Layout>
            <S.Container>
                <h1>Zad. 3</h1>

                <S.NotebookContainer>
                    <S.ListPanel>
                        Notes:
                        <S.List>
                            {notes &&
                                notes.map((note, idx) => (
                                    <li key={`${note.name}-${idx}`}>
                                        <S.ListButton
                                            onClick={() =>
                                                handleEditMode(note.id)
                                            }
                                        >
                                            {note.name}
                                        </S.ListButton>
                                    </li>
                                ))}
                        </S.List>
                    </S.ListPanel>

                    <S.EditorPanel>
                        <S.Form onSubmit={handleFormSubmit}>
                            <TextInput
                                id="Name"
                                name={"name"}
                                value={form.name}
                                onChange={(e) =>
                                    handleInputChange(e.target.value, "name")
                                }
                                label="Name"
                                fullWidth
                                required
                            />

                            <TextArea
                                id="Content"
                                name={"content"}
                                value={form.content}
                                onChange={(e) =>
                                    handleInputChange(e.target.value, "content")
                                }
                                label="Content"
                                minHeight={200}
                                fullWidth
                            />

                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </S.Form>
                    </S.EditorPanel>
                </S.NotebookContainer>
            </S.Container>
        </Layout>
    );
};

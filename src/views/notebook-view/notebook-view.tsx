import { useState } from "react";
import { TextInput } from "../../components/form/text-input/text-input";
import { Layout } from "../../layouts/layout";
import * as S from "./notebook-view.style";
import { TextArea } from "../../components/form/textarea/textarea";
import { Button } from "../../components/button/button";

type Form = {
    name: string;
    content: string;
};

export const NotebookView = () => {
    const [form, setForm] = useState<Form>({
        name: "",
        content: "",
    });

    const handleInputChange = (e: string, fieldName: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: e,
        }));
    };

    return (
        <Layout>
            <S.Container>
                <h1>Zad. 3</h1>

                <S.NotebookContainer>
                    <S.ListPanel>
                        Notes
                        <S.List>
                            <li>elko</li>
                            <li>elko</li>
                        </S.List>
                    </S.ListPanel>

                    <S.EditorPanel>
                        <S.InputContainer>
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
                        </S.InputContainer>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </S.EditorPanel>
                </S.NotebookContainer>
            </S.Container>
        </Layout>
    );
};

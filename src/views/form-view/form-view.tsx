import { useState } from "react";
import { TextInput } from "../../components/form/text-input/text-input";
import { Layout } from "../../layouts/layout";
import { NumberInput } from "../../components/form/number-input/number-input";
import * as S from "./form-view.style";
import { Button } from "../../components/button/button.style";
import { Table } from "../../components/table/table";

type Form = {
    name?: string;
    width?: number;
    height?: number;
    depth?: number;
};

export const FormView = () => {
    const [form, setForm] = useState({
        name: "",
        width: 0,
        height: 0,
        depth: 0,
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
                <form>
                    <S.H2>Please enter package and dimensions</S.H2>
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
                        />
                        <NumberInput
                            id="Width"
                            name={"width"}
                            value={form.width}
                            onChange={(e) =>
                                handleInputChange(e.target.value, "width")
                            }
                            label="Width"
                            fullWidth
                        />
                        <NumberInput
                            id="Height"
                            name={"height"}
                            value={form.height}
                            onChange={(e) =>
                                handleInputChange(e.target.value, "height")
                            }
                            label="Height"
                            fullWidth
                        />
                        <NumberInput
                            id="Depth"
                            name={"depth"}
                            value={form.depth}
                            onChange={(e) =>
                                handleInputChange(e.target.value, "depth")
                            }
                            label="Depth"
                            fullWidth
                        />
                    </S.InputContainer>
                    <S.ButtonContainer>
                        <Button variant="primary">Confirm</Button>
                        <Button variant="secondary">Confirm</Button>
                    </S.ButtonContainer>
                </form>

                <S.Hr />

                <S.H2>Packages</S.H2>

                {/* <Table columns={
                    [
                        {key: "name", header: "Name"},
                        {key: "width", header: "Width"},
                        {key: "height", header: "Height"},
                        {key: "depth", header: "Depth"},
                        {key: "volume", header: "Volume"},
                    ]
                }
                data={}
                /> */}
            </S.Container>
        </Layout>
    );
};

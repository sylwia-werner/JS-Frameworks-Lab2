import { useState } from "react";
import { TextInput } from "../../components/form/text-input/text-input";
import { Layout } from "../../layouts/layout";
import { NumberInput } from "../../components/form/number-input/number-input";
import * as S from "./form-view.style";
import { Table } from "../../components/table/table";
import { Button } from "../../components/button/button";

type TableData = {
    name: string;
    width: number;
    height: number;
    depth: number;
    volume: string;
};

type Form = {
    name: string;
    width: number;
    height: number;
    depth: number;
};

export const FormView = () => {
    const [form, setForm] = useState<Form>({
        name: "",
        width: 0,
        height: 0,
        depth: 0,
    });

    const [tableData, setTableData] = useState<TableData[]>([]);

    const calculateVolume = (width: number, height: number, depth: number) => {
        return width * height * depth;
    };

    const clearForm = () => {
        setForm({ name: "", width: 0, height: 0, depth: 0 });
    };

    const handleInputChange = (e: string, fieldName: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: e,
        }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const volume = calculateVolume(form.width, form.height, form.depth);
        const formWithVolume = { ...form, volume: volume.toFixed(2) };

        setTableData((prevTableData) => [...prevTableData, formWithVolume]);

        clearForm();
    };

    const totalVolume = tableData.reduce(
        (total, rowData) => total + (parseFloat(rowData.volume) || 0),
        0,
    );

    return (
        <Layout>
            <S.Container>
                <h1>Zad. 2</h1>
                <form onSubmit={handleFormSubmit}>
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
                            maxLength={20}
                            fullWidth
                            required
                        />
                        <NumberInput
                            id="Width"
                            name={"width"}
                            value={form.width}
                            onChange={(e) =>
                                handleInputChange(e.target.value, "width")
                            }
                            label="Width"
                            minLength={1}
                            maxLength={1000}
                            groupText="cm"
                            fullWidth
                            required
                        />
                        <NumberInput
                            id="Height"
                            name={"height"}
                            value={form.height}
                            onChange={(e) =>
                                handleInputChange(e.target.value, "height")
                            }
                            label="Height"
                            minLength={1}
                            maxLength={1000}
                            groupText="cm"
                            fullWidth
                            required
                        />
                        <NumberInput
                            id="Depth"
                            name={"depth"}
                            value={form.depth}
                            onChange={(e) =>
                                handleInputChange(e.target.value, "depth")
                            }
                            label="Depth"
                            minLength={1}
                            maxLength={1000}
                            groupText="cm"
                            fullWidth
                            required
                        />
                    </S.InputContainer>
                    <S.ButtonContainer>
                        <Button variant="primary" type="submit">
                            Confirm
                        </Button>
                        <Button
                            variant="secondary"
                            type="reset"
                            onClick={clearForm}
                        >
                            Clear
                        </Button>
                    </S.ButtonContainer>
                </form>

                <S.Hr />

                <S.H2>Packages</S.H2>

                <S.TableContainer>
                    <Table
                        columns={[
                            { key: "name", header: "Name" },
                            { key: "width", header: "Width" },
                            { key: "height", header: "Height" },
                            { key: "depth", header: "Depth" },
                            { key: "volume", header: "Volume" },
                        ]}
                        data={tableData}
                        footData={totalVolume}
                    />
                </S.TableContainer>
            </S.Container>
        </Layout>
    );
};

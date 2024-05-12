import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Layout } from "../../layouts/layout";
import * as S from "./dom-view.style";

export const DomView = () => {
    const [radius, setRadius] = useState(10); // Początkowa wartość średnicy koła

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setRadius(value);
    };

    return (
        <Layout>
            <S.Container>
                <S.RangeInput
                    type="range"
                    min="10"
                    max="500"
                    value={radius}
                    onChange={handleSliderChange}
                />

                <S.Circle radius={radius}>{radius}</S.Circle>
            </S.Container>
        </Layout>
    );
};

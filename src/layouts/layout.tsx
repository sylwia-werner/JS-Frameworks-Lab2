import { Header } from "../components/header/header";
import * as S from "./layout.style";

interface Props {
    children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
    return (
        <S.Container>
            <Header />
            <S.Main className="main">{children}</S.Main>
        </S.Container>
    );
};

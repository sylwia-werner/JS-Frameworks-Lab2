import * as S from "./header.style";

export const Header = () => {
    return (
        <S.Header className="header">
            <nav className="nav">
                <S.List className="list">
                    <S.Item className="item">
                        <S.Link className="link" href="/">
                            DOM
                        </S.Link>
                    </S.Item>
                    <S.Item className="item">
                        <S.Link className="link" href="/form">
                            Form
                        </S.Link>
                    </S.Item>
                    <S.Item className="item">
                        <S.Link className="link" href="/notebook">
                            Notebook
                        </S.Link>
                    </S.Item>
                </S.List>
            </nav>
        </S.Header>
    );
};

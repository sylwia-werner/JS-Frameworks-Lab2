import * as S from "./table.style";

interface Column<T> {
    key: keyof T;
    header: string;
}

interface Props<T> {
    columns: Column<T>[];
    data: T[];
    footData?: string | number;
}

export function Table<T>({ columns, data, footData }: Props<T>) {
    return (
        <S.Table>
            <S.Thead>
                <S.TrHead>
                    {columns.map((column, index) => (
                        <S.Th key={`${index}-${String(column.key)}`}>
                            {column.header}
                        </S.Th>
                    ))}
                </S.TrHead>
            </S.Thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <S.Tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <S.Td key={colIndex}>
                                {String(row[column.key])}
                            </S.Td>
                        ))}
                    </S.Tr>
                ))}
            </tbody>
            {footData ? (
                <S.TFoot>
                    <S.Tr>
                        <S.Td colSpan={columns.length}>{footData}</S.Td>
                    </S.Tr>
                </S.TFoot>
            ) : null}
        </S.Table>
    );
}

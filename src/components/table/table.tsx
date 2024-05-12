interface Column<T> {
    key: keyof T;
    header: string;
}

interface Props<T> {
    columns: Column<T>[];
    data: T[];
}

export function Table<T>({ columns, data }: Props<T>) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={`${index}-${String(column.key)}`}>
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{String(row[column.key])}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

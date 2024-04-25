interface ICell {
    value: any;
    empty: any;
    visible?: boolean;
    title: string;
    columnIndex: number;
    align: string;
    sorter: boolean;
    width: number;
    ellipsis?: boolean;
    className: string;
}

interface IRow {
    [key: string]: any | ICell;
}

interface IColumn {
    title: string;
    dataIndex: string;
    columnIndex: number;
    key: string;
    align: string;
    sorter: boolean;
    width: number;
    ellipsis: boolean;
    className: string;
}

interface ITableData {
    total: number;
    pageSize: number;
    current: number;
}

const normalize = (
    data: IRow[],
    loading: boolean,
    onlyHeader: boolean = false
): { dataSource: IRow[]; columns: IColumn[] } => {
    const dataSource: IRow[] = [];
    const columns: IColumn[] = [];

    data.forEach((row) => {
        const item: IRow = {};

        for (const [key, cell] of Object.entries(row)) {
            if (typeof cell === "object" && cell !== null) {
                item[key] = !loading ? cell.value : cell.empty;

                if (Object.keys(row).length - 1 !== columns.length) {
                    if (cell.visible !== false) {
                        columns.push({
                            title: cell.title,
                            dataIndex: key,
                            columnIndex: cell.columnIndex,
                            key: key,
                            align: cell.align,
                            sorter: cell.sorter,
                            width: cell.width,
                            ellipsis: cell.ellipsis ? cell.ellipsis : loading,
                            className: cell.className,
                        });
                    }
                }
            } else {
                item[key] = cell;
            }
        }

        if (onlyHeader) {
            return {
                dataSource,
                columns,
            };
        }

        dataSource.push(item);
    });

    return {
        dataSource,
        columns,
    };
};

const tableRowsCount = ({ total, pageSize, current }: ITableData): number => {
    if (total) {
        const count = total - (current - 1) * pageSize;
        return count < pageSize ? count : pageSize;
    }
    return pageSize;
};

const tableHelper = {
    normalize,
    tableRowsCount,
};

export default tableHelper;

import React from 'react';

interface IColumn
{
    dataIndex: string;
}

interface IRowData
{
    [ key: string ]: string | JSX.Element;
}

const SkeletonTableData = (
    columns: IColumn[],
    perPage = 30,
    className = 'my-0'
): IRowData[] =>
{
    const rowColumn: IRowData = { key: `empty-data-0` };
    const emptyData: IRowData[] = [];

    columns?.map(({ dataIndex }) => (rowColumn[ dataIndex ] = <div className={`custom-skeleton ${className}`}></div>));

    for (let i = 0; i < perPage; i++) {
        rowColumn[ 'key' ] = `empty-data-${i}`;
        emptyData.push({ ...rowColumn });
    }

    return emptyData;
};

export default SkeletonTableData;

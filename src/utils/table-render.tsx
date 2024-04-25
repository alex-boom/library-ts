import React from 'react';
import { Table } from 'antd';
import { tableHelper } from 'utils';


interface ITableData
{
    total: number;
    pageSize: number;
    current: number;

}


type TableRenderProps = {
    data: any[];
    loading: boolean;
    pagination: ITableData;
    setOrderBy: (order: { column: string; order: 'ASC' | 'DESC' }[]) => void;
    defaultOrder: { column: string; order: 'ASC' | 'DESC' };
    tableBuilder: (args: {
        data: any[];
        loading: boolean;
        rowAmount: number;
        onlyHeader: boolean;
    }) => { dataSource: any[]; columns: any[] };
};

const TableRender: React.FC<TableRenderProps> = ({
    data,
    loading,
    pagination,
    setOrderBy,
    defaultOrder,
    tableBuilder,
}) =>
{
    const { dataSource, columns } = tableBuilder({
        data: !loading && !pagination.total ? [ '' ] : data,
        loading,
        rowAmount: tableHelper.tableRowsCount(pagination),
        onlyHeader: !loading && !data?.length,
    });

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            pagination={pagination}
            onChange={(pagination, filters, sorter) =>
            {
                const { column, order } = sorter as { column: any; order: 'ascend' | 'descend' | undefined };
                if (column && order) {
                    setOrderBy([
                        {
                            column: column.columnIndex,
                            order: order === 'ascend' ? 'ASC' : 'DESC',
                        },
                    ]);
                } else {
                    setOrderBy([ defaultOrder ]);
                }
            }}
            tableLayout='fixed'

        />
    );
};

export default TableRender;

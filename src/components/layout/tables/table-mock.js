import React from "react";

import { Table } from 'antd';


const TableMock = ({
    mockData = false,
    tableHelper,
    children,
    tableVisible = true,
    tableLayout = 'fixed',
}) => {

    const dataSource = tableHelper.data(mockData);

    return (
        <>

            { children }

            { tableVisible &&

                <Table
                    className="table-main"
                    dataSource={ dataSource }
                    columns={ tableHelper.columns }
                    tableLayout={ tableLayout }
                    // size="middle"
                />
            }

        </>
    );
};

export default TableMock;
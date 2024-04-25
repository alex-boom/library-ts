import React from 'react';
import { Button, Table } from 'antd';
import { Localize, ModalStandard } from 'components/service';

import './elements.scss';

interface ISyncInfo
{
    records: number;
    new: number;
    updated: number;
}

interface IData
{
    [ key: string ]: ISyncInfo;
}

interface ImportedProps
{
    data: {
        sync_info: IData;
    };
    modalTitle?: string;
    isImport?: boolean;
    model?: string | false;
}

const Imported: React.FC<ImportedProps> = ({ data, modalTitle = 'The file is import', isImport = false, model = false }) =>
{

    data.sync_info[ model as string ] = {
        records: data?.sync_info[ model as string ]?.records,
        new: data?.sync_info[ model as string ]?.new,
        updated: data?.sync_info[ model as string ]?.updated,
    };

    function convertData(data: IData)
    {
        const newData = [];
        for (const key in data) {
            newData.push({
                key: key,
                records: key,
                found: data[ key ].records,
                new: data[ key ].new,
                update: data[ key ].updated,
            });
        }
        return newData;
    }

    let columns = [
        {
            title: <Localize>TABLES.Column_Title_Records</Localize>,
            dataIndex: 'records',
            className: 'primary-color',
        },
        {
            title: <Localize>TABLES.Column_Title_Found</Localize>,
            dataIndex: 'found',
        },
        {
            title: <Localize>TABLES.Column_Title_New</Localize>,
            dataIndex: 'new',
        },
        {
            title: <Localize>TABLES.Column_Title_Updated</Localize>,
            dataIndex: 'update',
        },
    ];

    columns = isImport ?
        columns.filter(column => (column.title as unknown as string).includes('New')) : columns;

    const Inner: React.FC<{ action: () => void; modalTitle: string }> = ({ action, modalTitle }) => (
        <div className='holder-importing'>
            <strong className='modal-title'><span className='text'><Localize>{modalTitle}</Localize></span></strong>
            <Table className='modal-table' columns={columns} dataSource={convertData(data.sync_info)} pagination={false} />
            <Button className="light-bg" onClick={action}>Ok</Button>
        </div>
    );

    return (
        <ModalStandard
            width={400}
            extraClass={'modal-form'}
            defaultShow={true}>
            <Inner action={() => { }} modalTitle={modalTitle} />
        </ModalStandard>
    );
};

export default Imported;

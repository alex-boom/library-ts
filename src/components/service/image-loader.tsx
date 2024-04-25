import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined, SyncOutlined } from '@ant-design/icons';


type ILoaderProps = {
    type: 'block' | 'item';
    style?: React.CSSProperties;
    blockClass?: string;
    spinClass?: string;
    tipText?: string;
};

const Loader: React.FC<ILoaderProps> = ({
    type,
    style = {},
    blockClass = 'color-text',
    spinClass = '',
    tipText = 'LOADING...',
}) =>
{
    if (type === 'block') {
        return (
            <div className={`loader-block ${blockClass}`} style={style}>
                <Spin
                    size='large'
                    indicator={<SyncOutlined spin />}
                    className={spinClass}
                    tip={tipText}
                />
            </div>
        );
    }

    return (
        <div className={`loader-item ${blockClass}`} style={style}>
            <Spin size='large' className={spinClass} indicator={<LoadingOutlined spin />} />
        </div>
    );
};

export default Loader;

import React from "react";
import { Spin } from "antd";
import { LoadingOutlined, SyncOutlined } from "@ant-design/icons";

type TLoaderProps = {
    type?: "block" | "item" | undefined,
    blockClass?: string,
    spinClass?: string,
    tipText: string,
    style: Record<string, string>,
};

const Loader: React.FC<TLoaderProps> = ({
    type,
    blockClass = "color-text",
    spinClass,
    tipText = "LOADING...",
    style = {},
}) =>
{
    if (type === "block") {
        return (
            <div className={`loader-block ${blockClass}`} style={style}>
                <Spin
                    size="default"
                    indicator={<SyncOutlined spin />}
                    className={spinClass || ""}
                    tip={tipText}
                />
            </div>
        );
    }

    return (
        <div className={`loader-block ${blockClass}`} style={style}>
            <Spin
                size="large"
                className={spinClass || ""}
                indicator={<LoadingOutlined spin />}
            />
        </div>
    );
};

export default Loader;

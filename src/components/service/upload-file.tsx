import React, { FC } from "react";
import { Button, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface IUploadFileProps
{
    setMutation: (mutation: any) => void;
    loading: boolean;
    accept?: string;
    extraClass?: string;
    varSetMutation: any;
    showUploadList?: boolean;
    defaultFileList?: any[];
    uploadBtn?: JSX.Element;
}

const { Dragger } = Upload;

const UploadFile: FC<IUploadFileProps> = ({
    setMutation = () => { },
    loading,
    accept = ".xml",
    extraClass = "",
    varSetMutation = {},
    showUploadList = false,
    defaultFileList = [],
    uploadBtn = (
        <Button style={{ maxWidth: "100%" }} type="primary">
            <PlusOutlined /> Import entity
        </Button>
    ),
}) =>
{
    const props = {
        className: `file-upload ${extraClass}`,
        disabled: loading,
        accept,
        defaultFileList,
        showUploadList,
        beforeUpload: (file: File) =>
        {
            let uploadVar: any;

            if (varSetMutation.input !== undefined) {
                uploadVar = { ...varSetMutation };
                uploadVar.input.file = file;
            } else {
                uploadVar = { ...varSetMutation, file };
            }

            setMutation({
                variables: {
                    ...uploadVar,
                },
            });

            return false;
        },
    };

    return <Dragger {...props}>{uploadBtn}</Dragger>;
};

export default UploadFile;

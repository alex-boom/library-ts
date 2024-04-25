import { Button, Result } from "antd";
import React from "react";


interface IErrorBlockProps
{
    status?: string;
    title?: string;
    subtitle?: string;
    action?: () => void;
    buttonText?: string;
}

const ErrorBlock: React.FC<IErrorBlockProps> = ({
    title = "ERROR",
    subtitle = "Sorry something went wrong. Please try to reload page or contact with administrator.",
    action,
    buttonText = "Back home"
}) =>
{
    return (
        <Result
            title={title}
            subTitle={subtitle}
            extra={
                <Button
                    className="rounded-button"
                    type="primary"
                    onClick={action}
                >
                    {buttonText}
                </Button>
            }
        />
    );
};

export default ErrorBlock;

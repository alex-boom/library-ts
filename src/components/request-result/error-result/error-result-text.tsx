import React from "react";
import { Result, Button } from "antd";


interface IErrorResultTextProps
{
    title: string;
    description: string;
    action?: () => void;
    goToText: string;
}

const ErrorResultText: React.FC<IErrorResultTextProps> = ({ title, description, action = () => { }, goToText }) =>
{
    return (
        <Result
            status="warning"
            title={
                <div className="error-result">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            }
            extra={
                <Button type="primary" onClick={action}>
                    {goToText}
                </Button>
            }
        />
    );
};

export default ErrorResultText;

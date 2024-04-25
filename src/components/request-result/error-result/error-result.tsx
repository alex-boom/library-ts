import React from "react";
import { Result, Button } from "antd";

import "./error-result.scss";

interface IErrorInfo {
    message: string;
    extensions: {
        reason: string,
        action: string,
    };
}

interface IErrorResultProps {
    error: {
        graphQLErrors: IErrorInfo[],
    };
    action: () => void;
    goToText: string;
}

const ErrorResult: React.FC<IErrorResultProps> = (props) => {
    const { error, action, goToText } = props;

    const ErrorMessage = error.graphQLErrors.map(
        ({ message: label, extensions: { reason, action } }) => {
            return (
                <div className="error-result" key={action}>
                    <h3>{label}</h3>
                    <p>{reason}</p>
                </div>
            );
        }
    );

    return (
        <Result
            status="warning"
            title={ErrorMessage}
            extra={
                <Button type="primary" onClick={action}>
                    {goToText}
                </Button>
            }
        />
    );
};

export default ErrorResult;

import React from "react";
import { Modal } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import Icons from "components/icons";

const errorNotification = (error) => {
    if (error.graphQLErrors !== undefined) {
        Modal.error({
            className: "modal-standard modal-form",
            centered: true,
            width: 500,
            closeIcon: <Icons.Close />,
            //   footer: null,
            maskClosable: true,
            title: (
                <span className="modal-title">
                    <div className="text">
                        <span
                            style={{
                                color: "var(--switch_colorTextQuaternary)",
                                marginRight: "10px",
                            }}
                        >
                            <CloseCircleFilled />
                        </span>
                        Error
                    </div>
                </span>
            ),
            content: error.graphQLErrors.map(
                ({ message: label, extensions: { reason } }) => (
                    <div key={label} className="error-item">
                        <p>{label}</p>
                        <p>{reason}</p>
                    </div>
                )
            ),
        });
    }

    if (error.reason !== undefined && error.label !== undefined) {
        Modal.error({
            className: "modal-standard modal-form",
            centered: true,
            width: 500,
            closeIcon: <Icons.Close />,
            //   footer: null,
            maskClosable: true,
            title: (
                <span className="modal-title">
                    <div className="text">
                        <span
                            style={{
                                color: "var(--switch_colorTextQuaternary)",
                                marginRight: "10px",
                            }}
                        >
                            <CloseCircleFilled />
                        </span>
                        Error
                    </div>
                </span>
            ),
            content: (
                <div className="error-item">
                    <p>{error.label}</p>
                    <p>{error.reason}</p>
                </div>
            ),
        });
    }

    return null;
};

export default errorNotification;

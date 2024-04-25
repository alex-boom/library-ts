import React, { useState, ReactNode, ReactElement } from "react";
import { Modal, ConfigProvider } from "antd";
import customizeTheme from "components/customize-theme";
import Icons from "components/icons";

interface ModalStandardProps {
    modalButton?: ReactElement;
    extraClass?: string;
    showModal?: boolean;
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
    maskClosable?: boolean;
    closable?: boolean;
    defaultShow?: boolean;
    disabled?: boolean;
    afterClose?: () => void;
    width?: number;
    onCancel?: () => void;
    children: ReactNode | ReactNode[];
}

const ModalStandard: React.FC<ModalStandardProps> = ({
    modalButton,
    extraClass = "",
    showModal: parentShowModal,
    setShowModal: parentSetShowModal,
    maskClosable = true,
    closable = true,
    defaultShow = false,
    disabled = false,
    afterClose = () => {},
    width = 380,
    onCancel = () => {},
    children,
}) => {
    const [showModal, setShowModal] = useState<boolean>(defaultShow);

    const isControlled =
        typeof parentShowModal !== "undefined" &&
        typeof parentSetShowModal !== "undefined";

    const handleModalVisibility = (visible: boolean) => {
        if (isControlled) {
            parentSetShowModal(visible);
        } else {
            setShowModal(visible);
        }
    };

    return (
        <>
            {modalButton &&
                React.cloneElement(modalButton, {
                    onClick: () => {
                        if (!disabled) {
                            handleModalVisibility(true);
                        }
                    },
                })}

            <Modal
                className={`modal-standard ${extraClass}`}
                centered
                visible={isControlled ? parentShowModal : showModal}
                maskClosable={maskClosable}
                width={width}
                closable={closable}
                closeIcon={<Icons.Close />}
                destroyOnClose={true}
                footer={null}
                onOk={() => handleModalVisibility(false)}
                onCancel={() => {
                    handleModalVisibility(false);
                    onCancel();
                }}
                afterClose={() => afterClose()}
            >
                <ConfigProvider theme={customizeTheme.LightTheme()}>
                    {Array.isArray(children)
                        ? children.map((child, index) =>
                              React.cloneElement(child as ReactElement, {
                                  key: index,
                                  action: () => handleModalVisibility(false),
                              })
                          )
                        : React.cloneElement(children as ReactElement, {
                              action: () => handleModalVisibility(false),
                          })}
                </ConfigProvider>
            </Modal>
        </>
    );
};

export default ModalStandard;

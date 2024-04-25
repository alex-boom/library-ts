import React, { ReactElement, useState } from "react";
import { Drawer, ConfigProvider } from "antd";
import customizeTheme from "components/customize-theme";
import Icons from "components/icons";

interface DrawerStandartProps
{
    modalButton: ReactElement;
    extraClass?: string;
    disabled?: boolean;
    width?: number;
    onCancel?: () => void;
    children: ReactElement | ReactElement[];
}

const DrawerStandart = ({
    modalButton,
    extraClass = "",
    disabled = false,
    width = 450,
    onCancel = () => { },
    ...props
}: DrawerStandartProps) =>
{
    const [ showModal, setShowModal ] = useState(false);

    const handleClose = () =>
    {
        setShowModal(false);
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <>
            {React.cloneElement(modalButton, {
                disabled,
                onClick: () => setShowModal(true),
            })}
            <Drawer
                className={`drawer-standard ${extraClass}`}
                open={showModal}
                width={width}
                placement="right"
                closeIcon={<Icons.Close />}
                onClose={handleClose}
                title={null}
                footer={null}
            >
                <ConfigProvider theme={customizeTheme.LightTheme()}>
                    {Array.isArray(props.children)
                        ? props.children.map((child, index) =>
                            React.cloneElement(child, {
                                key: index,
                                action: handleClose,
                                showModal,
                            })
                        )
                        : React.cloneElement(props.children, {
                            action: handleClose,
                        })}
                </ConfigProvider>
            </Drawer>
        </>
    );
};

export default DrawerStandart;

import React, { useState } from "react";
import { Modal } from "antd";
import { errorNotification } from "components/request-result";
import { Localize } from "components/service";


const confirmRemoveEntity = (props) =>
{
    const {
        variables,
        deleteMutation,
    } = props;

    let deleteVar;

    if (variables !== undefined) {
        deleteVar = { ...variables };
    } else {
        return false;
    }

    deleteMutation({
        variables: {
            ...deleteVar
        }

    }).catch((error) =>
    {
        errorNotification(error);
    });
};

const EntityRemoveButton = (props) =>
{

    const [ showModal, setShowModal ] = useState(false);
    const {
        modalButton,
        loading,
        variables = {},
        deleteMutation = () => { },
        nameEntity,
        width = 380,
        dataNameEntity,
        text = false,
        disabled = false,
        okText = Localize({ children: "GLOBAL.Button_Text_Delete" }).props.children,
        action = () => { },
    } = props;


    const subText = <p><Localize deleteObjectType={`${nameEntity} ${dataNameEntity} `}>GLOBAL.Modal_Text_DeleteText</Localize></p>;

    return (
        <>
            {React.cloneElement(modalButton, {
                onClick: () => !disabled && setShowModal(true)
            })}

            <Modal
                className="modal-standard modal-delete"
                open={showModal}
                width={width}
                centered
                onOk={
                    () =>
                    {
                        confirmRemoveEntity({
                            variables,
                            deleteMutation,
                        });
                        setShowModal(false);
                        action();
                    }
                }
                onCancel={() => setShowModal(false)}
                okText={okText}
                okButtonProps={
                    {
                        loading,
                        className: ""
                    }
                }
                cancelText={<Localize>GLOBAL.Button_Text_Cancel</Localize>}
                cancelButtonProps={
                    { className: "light-bg" }
                }
            >
                {text ? text : subText}

            </Modal>
        </>
    );
};

export default EntityRemoveButton;
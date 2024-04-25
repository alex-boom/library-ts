import React from "react";
import { Button } from "antd";
import AnimationFolder from "./animation-folder";
import { Localize, ModalStandard } from "components/service";

import "./elements.scss";

interface ImportingProps
{
    modalTitle?: string;
    loading: boolean;
    extraClass?: string;
    maskClosable?: boolean;
    cancelHide?: boolean;
}

const Importing: React.FC<ImportingProps> = ({
    modalTitle = "The file is import",
    loading,
    extraClass = "",
    maskClosable = true,
    cancelHide,
}) =>
{
    const Inner: React.FC<{ action: () => void }> = ({ action }) => (
        <div className={`holder-importing ${extraClass}`}>
            <strong className="modal-title">
                <span className="text">
                    <Localize>{modalTitle}</Localize>
                </span>
            </strong>
            <AnimationFolder />

            {!cancelHide && (
                <Button className="light-bg" onClick={action}>
                    Cancel
                </Button>
            )}
        </div>
    );

    return (
        <ModalStandard
            width={400}
            extraClass={"modal-form"}
            maskClosable={maskClosable}
            closable={!loading}
            defaultShow={true}
        >
            <Inner action={() => { }} />
        </ModalStandard>
    );
};

export default Importing;

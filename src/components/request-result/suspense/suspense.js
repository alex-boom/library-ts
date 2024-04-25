import React from "react";
import { useNavigate } from "react-router-dom";

import { useLogout } from "components/use-hooks";
import { ErrorBlock, ErrorResult, Loader } from "components/request-result";

const Suspense = ({
    state,
    type = "",
    loaderType = "block",
    tipText = "",
    children,
    blockClass,
}) => {
    const { loading, error = false, data = false } = state;

    const navigate = useNavigate();
    const { clearStore } = useLogout();

    if (loading) {
        return (
            <Loader
                type={loaderType}
                tipText={tipText}
                blockClass={blockClass}
            />
        );
    }

    if (error) {
        if (type === "block") {
            return <ErrorBlock action={() => clearStore({ route: "/" })} />;
        } else {
            return (
                <ErrorResult
                    error={error}
                    action={() => navigate(-1)}
                    goToText="Go back"
                />
            );
        }
    }

    if (data === undefined) {
        return null;
    }

    if (children.length !== undefined) {
        return children.map((item) => React.cloneElement(item, { ...data }));
    } else {
        return React.cloneElement(children, { ...data });
    }
};

export default Suspense;

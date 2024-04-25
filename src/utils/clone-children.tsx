import React, { ReactElement, ReactNode } from "react";

type TCloneChildrenProps = {
    children: ReactNode;
    [ prop: string ]: any;
};

const cloneChildren = ({ children, ...props }: TCloneChildrenProps): ReactNode | null =>
{
    if (!children) {
        return null;
    }

    if (Array.isArray(children)) {
        return children.map((child, index) =>
        {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    key: index,
                    ...props,
                });
            }
            return child;
        });
    }

    return typeof children === "string" ? children : React.cloneElement(children as ReactElement, props);
};

export default cloneChildren;

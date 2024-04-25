import React from "react";

import { useTranslation } from "components/use-hooks";

const Localize = ({ children, wrap = false, ...params }) =>
{
    const translations = useTranslation(params);

    let translation = translations[ children ] ? translations[ children ] : children;

    if (Object.keys(params).length) {
        for (let [ key, value ] of Object.entries(params)) {
            const regExp = new RegExp(`{ ${key} }`, "g");

            if (typeof value === "object") {
                translation = translation.split(`{ ${key} }`).map((item, idx, arr) =>
                {
                    if (arr.length - 1 > idx) {
                        return [ item, { ...value, key: `${key}_${idx}` } ];
                    }

                    return item;
                });
            } else {
                translation = translation?.replace(regExp, value);
            }
        }
    }

    if (wrap) {
        let CustomTag = wrap === true ? `span` : `${wrap}`;

        return <CustomTag>{translation}</CustomTag>;
    }

    return <>{translation}</>;
};

export default Localize;

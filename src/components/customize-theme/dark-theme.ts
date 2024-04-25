import Components from "./dark-components-style-config";
import Token from "./token-style-config";

import { cssVariable } from "graphql/cache";
import { useReactiveVar } from "@apollo/client";

export const DarkTheme = () => {
    const cssVar = useReactiveVar(cssVariable);

    const { ...components } = Components(cssVar);
    const { dark } = Token(cssVar);

    return {
        components,
        token: {
            ...dark,
        },
    };
};

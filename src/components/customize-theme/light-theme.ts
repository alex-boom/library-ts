import Components from './light-components-style-config';
import { cssVariable } from "graphql/cache";
import { useReactiveVar } from "@apollo/client";



export const LightTheme = () => {

    const cssVar = useReactiveVar(cssVariable);
    const { ...components } = Components(cssVar);

    return {
        components,
    };
};
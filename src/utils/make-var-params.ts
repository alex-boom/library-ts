import {
    IGuestParams,
    IAppParams
} from "graphql/cache";

type TParamType = IGuestParams | IAppParams;

type TParamVar<T> = {
    (): T;
    (newValue: T): void;
};

const makeVarParam = <T extends TParamType>(paramVar: TParamVar<T>, initialParam: T) => {

    const resetParams = () => {
        paramVar(initialParam);
    };

    const setParams = (newParams: Partial<T>) => {
        paramVar({
            ...paramVar(),
            ...newParams
        });
    };

    const getParam = (param?: keyof T) => {
        if (param === undefined) {
            return { ...paramVar() };
        }
        return paramVar()[param];
    };

    return {
        set: setParams,
        get: getParam,
        reset: resetParams
    };
};

export default makeVarParam;
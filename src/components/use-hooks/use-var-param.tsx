import {
    appParamsVar,
    appParamsInitial,
    guestParamsVar,
    guestParamsInitial
} from "graphql/cache";

import { makeVarParam } from "utils";


const useVarParam = (type: "guest" | "app") => {

    if(type === "guest"){
        return makeVarParam(guestParamsVar, guestParamsInitial);
    }

    return makeVarParam(appParamsVar, appParamsInitial);

};

export default useVarParam;
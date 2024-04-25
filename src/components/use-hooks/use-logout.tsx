import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { USER_LOGOUT } from "graphql/mutation/user-gql";
import { IS_LOGGED_IN } from "graphql/query/local-store-gql";

import { errorNotification } from "../request-result";
import useVarParam from "./use-var-param";

const useLogout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userLogout, { client }] = useMutation(USER_LOGOUT);

    const varParam = useVarParam("guest");

    const clearStore = ({ route = false }: { route?: string | boolean } = {}) => {
        localStorage.clear();
        client.cache.reset().then(() => {
            if (typeof route === 'string') {
                navigate(route ?? "/", { state: { path: location.pathname } });
                varParam.reset();
            }
        });
    };

    const logout = ({ redirectRoute = "/" }: { redirectRoute?: string } = {}) => {
        userLogout({
            update(cache) {
                cache.writeQuery({
                    query: IS_LOGGED_IN,
                    data: {
                        isLoggedIn: false,
                    },
                });

                clearStore({ route: redirectRoute });
            },
        }).catch((error) => {
            errorNotification(error);
        });
    };

    return {
        logout,
        clearStore,
    };
};

export default useLogout;

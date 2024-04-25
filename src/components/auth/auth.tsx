import React, { JSX, ReactNode } from "react";
import { useQuery } from "@apollo/client";


import { IS_LOGGED_IN } from "graphql/query/local-store-gql";


interface IAuthProps
{
    public: JSX.Element | null,
    private: JSX.Element | null,
    children?: ReactNode
}

const Auth: React.FC<IAuthProps> = (content): JSX.Element | null =>
{

    const { data: { isLoggedIn = false } = {} } = useQuery(IS_LOGGED_IN);


    return isLoggedIn ? content.private : content.public;
};


export default Auth;
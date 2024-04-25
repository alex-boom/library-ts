import { ApolloClient } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

import { IS_LOGGED_IN } from "graphql/query/local-store-gql";

import cache from "./cache";



const httpLink = createUploadLink({
    uri: process.env.REACT_APP_API_ENDPOINT
});


const authLink = setContext((_, { headers }) => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken)
    {

        return { headers: { ...headers } };
    }

    return {
        headers: {
            ...headers,
            Accept: "application/json",
            Authorization: `Bearer ${ authToken }`
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
});

cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
        isLoggedIn: !!localStorage.getItem("authToken"),
    },
});

export default client;

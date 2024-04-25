import { gql } from "@apollo/client";


export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export const GET_GUEST_PARAMS = gql`
    query GetGuestParams {
        guestParams @client
    }
`;

export const GET_APP_PARAMS = gql`
    query GetAppParams {
        appParams @client
    }
`;

export const clientSchemaExtensions = gql`

    directive @client on FIELD

    extend type Query {
        isLoggedIn: Boolean
        guestParams: Mixed
        appParams: Mixed
    }
`;

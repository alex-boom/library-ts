import { useQuery, FetchPolicy, ApolloError } from "@apollo/client";

import { GET_ME } from "graphql/query/user-gql";
import type { TUser } from "graphql/type/user-gql-types";


interface IUseMe
{
    me: TUser | null
    loading?: boolean
    error?: ApolloError
}

const useMe = (
    fetchPolicy: FetchPolicy = "cache-only",
    withStatus: boolean = false
): IUseMe =>
{
    const {
        data,
        loading,
        error
    } = useQuery(GET_ME, { fetchPolicy });

    const me = data ? data.me : null;

    if (withStatus)
        return {
            me,
            loading,
            error
        };

    return { me };


};

export default useMe;
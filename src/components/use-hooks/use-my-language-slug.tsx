import { useApolloClient, gql } from '@apollo/client';

interface IUserLanguage {
  me: {
    language_slug: string;
  }
}

const useMyLanguageSlug = () =>
{
    const client = useApolloClient();
    const cache = client.cache;

    const getMeCashe = cache.readQuery<IUserLanguage>({
        query: gql`
      query GetMe {
        me {
          language_slug
        }
      }`
    });

    return {
        language: getMeCashe?.me.language_slug
    };
};

export default useMyLanguageSlug;

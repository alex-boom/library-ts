import { useQuery, QueryResult } from "@apollo/client";
import { GET_VARIABLE_LIST_ALL } from "graphql/query/variable-gql";
import { useMe } from "components/use-hooks";

import MockData from "components/mock-data";

interface ITranslationParams
{
    initialLang: string;
}

interface IVariable
{
    slug: string;
    value: string;
    lang: string;
}

interface IMe
{
    lang_app?: string;
}

interface ILanguageTranslations
{
    [ key: string ]: string;
}

interface ITranslations
{
    [ key: string ]: ILanguageTranslations;
    de: ILanguageTranslations;
    en: ILanguageTranslations;

}

const useTranslation = (params: ITranslationParams) =>
{
    const { initialLang } = params;


    const translation: ITranslations = MockData.translation;


    const { loading, me = {} as IMe } = useMe("cache-only", true);

    const { data }: QueryResult<{ variableListAll: IVariable[] }> = useQuery(GET_VARIABLE_LIST_ALL, {
        skip: !me || !Object.keys(me).length
    });

    function convertDataFormat(data: IVariable[] | undefined): Record<string, string>
    {
        const convertedData: Record<string, string> = {};

        if (!data || !Array.isArray(data)) {
            return convertedData;
        }

        data.forEach((item) =>
        {
            if (item?.slug) {
                const key = item.slug.toLowerCase();
                const value = item.value;
                convertedData[ key ] = value;
            }
        });

        return convertedData;
    }

    const translationServer = (lang: string): Record<string, string> =>
        convertDataFormat(
            data?.variableListAll.filter((item) => item?.lang === lang)
        );

    const defaultLang = "en";

    if (!loading) {
        const initialLangTranslations = initialLang ? translation[ initialLang ] || {} : {};
        const meLangTranslations = me?.lang_app ? translation[ me.lang_app ] || {} : {};
        const serverTranslations = translationServer(initialLang || me?.lang_app || defaultLang);

        return {
            ...translation[ defaultLang ],
            ...initialLangTranslations,
            ...meLangTranslations,
            ...serverTranslations,
        };
    }

    return { ...translation[ defaultLang ] };
};

export default useTranslation;

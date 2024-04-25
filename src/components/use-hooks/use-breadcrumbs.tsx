import { useEffect } from "react";
import { breadCrumbsVar } from "graphql/cache";



interface IBreadcrumb
{
    label: string;
    path: string;
}

const useBreadCrumbs = (breadcrumbs: IBreadcrumb[]) =>
{
    useEffect(() =>
    {
        breadCrumbsVar(breadcrumbs);
        return () =>
        {
            breadCrumbsVar([]);
        };
    }, [ breadcrumbs ]);
};

export default useBreadCrumbs;

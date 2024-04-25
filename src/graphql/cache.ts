import { InMemoryCache, makeVar } from "@apollo/client";

interface IBreadcrumb {
    label: string;
    path: string;
}

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                guestParams: {
                    read() {
                        return guestParamsVar();
                    },
                },
                appParams: {
                    read() {
                        return appParamsVar();
                    },
                },
            },
        },
    },
});

export interface IGuestParams {
    mainBlockClass: string[];
    appBlockClass: string[];
    comeFrom?: string;
}

export const guestParamsInitial: IGuestParams = {
    mainBlockClass: [],
    appBlockClass: [],
};

export const guestParamsVar = makeVar<IGuestParams>(guestParamsInitial);

export interface IAppParams {
    headerClass: string[];
    mainBlockClass: string[];
    appBlockClass: string[];
    activeMenu: {
        selectedKeys: string[];
        openKeys: string[];
    };
    profileComplete: boolean;
}

export const appParamsInitial: IAppParams = {
    headerClass: [],
    mainBlockClass: [],
    appBlockClass: [],
    activeMenu: {
        selectedKeys: [],
        openKeys: [],
    },
    profileComplete: false,
};

export const appParamsVar = makeVar<IAppParams>(appParamsInitial);

export const linkStateVar = makeVar(false);

export const breadCrumbsVar = makeVar<IBreadcrumb[]>([]);

export const cssVariable = makeVar<Record<string, string>>({});

export default cache;

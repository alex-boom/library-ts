type TUserStatus = "active" | "block";

interface IRole {
    slug: string;
}

export enum EUserType {
    "ME" = "me",
    "USER" = "user",
}

export type TUser = {
    readonly id: number;
    name: string;
    surname: string;
    lang_api: string;
    lang_app: string;
    email: string;
    phone: string;
    roles: IRole[];
    status: TUserStatus;
    job_type: string;
    readonly is_admin: boolean;
};

export type TUserData = {
    [key in EUserType]: TUser;
};

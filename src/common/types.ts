import { ReactNode } from "react";


export type TTranslations = {
    [ key : string ] : string
};

export type TFilterFields = {
    text : string
    [ key : string ] : any
};

export interface ITranslationsContainer {
    [ key : string ] : TTranslations
}

export type TLocales = "en" | "de";

export interface IOutsideControlledModal {
    title      : string | ReactNode
    isOpen     : boolean
    close      : (callback ?: () => void ) => void
    confirm    : (props ?: any, callback ?: () => void ) => void
    extraClass ?: string
    children   ?: ReactNode
}

export enum ETeamRoles {
    PROJECT_MANAGER      = "project_manager",
    CONSTRUCTION_MANAGER = "construction_manager",
    DRAFTSMEN            = "draftsmen"
}

export enum EOrganizerOrETStatus  {
    CLOSED = "closed",
    ACTIVE = "active"
}

export enum EFileUploadModel {
    HALL          = "Hall",
    VARIABLE_LIST = "VariableList",
    FLOORING      = "Flooring",
    EQUIPMENT     = "Equipment",
    STAND_TYPE    = "StandType",
    ORGANIZER     = "Organizer"
}

export enum EFileUploadModelField {
    IMG_PATH  = "img_path",
    LOGO_PATH = "logo_path",
    HALL_PLAN = "hall_plan",
}

export type TRouteParams = { [key : string] : any } | undefined;

export interface IErrorNotification{
    label         ?: string
    reason        ?: string
    graphQLErrors ?: [{
        message : string
        extensions : {
            reason : string | undefined
        }
    }]
}

export interface ISuccessNotification{
    title        : string
    description ?: string
    duration    ?: number
}


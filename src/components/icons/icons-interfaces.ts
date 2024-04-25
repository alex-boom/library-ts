import { ReactNode } from "react";

export interface IIcon {
    readonly  className ?: string
    type        ?: string | any
    color       ?: string
    loading     ?: boolean
    children    ?: ReactNode
}
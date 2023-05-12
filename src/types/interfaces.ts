import { ReactNode } from "react";

export interface modalType {
    children?: ReactNode,
    isOpen: boolean,
    toggle: () => void
}
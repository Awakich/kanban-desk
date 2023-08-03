import { ReactNode } from 'react'

export type navigation = {
    id?: number,
    label: string;
}

export type home = {
    id?: number;
    label: string;
    description: string;
    color: string;
}

export type layout = {
    children: ReactNode;
}

export type note = {
    id?: string,
    label: string;
    date: string,
    hours: number,
    minutes: number;
}
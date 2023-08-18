import { ReactNode, DragEvent } from 'react'

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

export type notes = {
    notes: note[]
}

export type board = {
    id?: string,
    title: string,
    items: item[]
}

export type item = {
    id?: string,
    title: string,
    author: string,
}

export type items = {
    item?: item,
    board: board,
    dragOverHandler: (e: DragEvent<HTMLDivElement>) => void,
    dropHandler: (e: DragEvent<HTMLDivElement>, board: board, item: item) => void,
    dragStartHandler: (board: board, item: item) => void,
}
import { IconifyIcon } from "@iconify/react";

export interface HeadLabelInterface {
    id: string,
    label: string,
    alignRight?: boolean,
    padding?: "checkbox" | "none" | "normal",
}

export type GetComparatorOrderType = 'asc' | 'desc';

export type DataTableType<T> = T[];

export interface TablePropsInterface<T> {
    id?: string
    createTableCells: (row: T) => JSX.Element
    headLabel: HeadLabelInterface[]
    data: DataTableType<T>
    selectBy: string
    searchBy: string
    placeholder?: string
}

export interface TableDataInterface<T> {
    data: DataTableType<T>
    setData: React.Dispatch<React.SetStateAction<DataTableType<T>>>
}

export interface HeadLabelInterface {
    id: string,
    label: string,
    alignRight?: boolean,
    padding?: "checkbox" | "none" | "normal",
}

export interface TableOptionsInterface {
    label: string
    icon: IconifyIcon | string
    onClick: React.MouseEventHandler<HTMLAnchorElement>
}

export type StabilizedSortType<T> = [T, number];

export interface DescendingComparatorInterface {
    a: Record<any, any>,
    b: Record<any, any>,
    orderBy: string
}
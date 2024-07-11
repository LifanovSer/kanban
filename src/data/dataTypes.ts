export type Board = BoardItem[];

export interface BoardItem {
    id: string;
    type: string;
    img?: string;
    column_title: string;
    tasks: Tasks[];
}

export interface Tasks {
    id: string;
    number: string;
    title: string;
}

export interface ColumnItem {
    id?: string;
    type: string;
    column_title: string;
}

export type ColumnAllTypes = ColumnItem[];

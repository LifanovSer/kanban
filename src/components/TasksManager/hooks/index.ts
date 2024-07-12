import { Tasks } from "../../../data";

export type handleUpdate = (
    updatedTasks: Tasks[],
    currentColumnId: string,
) => void;

export type handleAddTask = (currentColumnId: string) => void;

export type handleRemoveColumn = (currentColumnId: string) => void;

export type handleAddColumn = () => void;

export type handleUpdateColumnType = (
    columnId: string,
    columnType: string,
    column_title: string,
) => void;

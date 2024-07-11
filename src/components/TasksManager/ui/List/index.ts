export { TasksManagerList } from "./TasksManagerList";
import { Board } from "@/data/dataTypes";
import {
    handleAddTask,
    handleRemoveColumn,
    handleUpdate,
    handleUpdateColumnType,
} from "../../useFeatures/useFeaturesTypes";

interface ColumnTitles {
    type: string;
    column_title: string;
}

export interface TasksManagerListProps {
    columns: Board;
    columnTitles: ColumnTitles[];
    handleAddTask: handleAddTask;
    handleRemoveColumn: handleRemoveColumn;
    handleUpdate: handleUpdate;
    handleUpdateColumnType: handleUpdateColumnType;
}

export interface OpenSelect {
    id: string | null;
    isOpen: boolean;
}

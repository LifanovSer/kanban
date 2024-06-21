import { Tasks } from "../../../data/dataTypes";
 
 export type handleUpdate = (updatedTasks: Tasks[], currentColumnId: string) => void;

 export type handleAddTask = (currentColumnId: string) => void;

 export type handleRemoveColumn = (currentColumnId: string) => void

 export type handleEditTitleColumn = (columnId: string, newValue: string) => void
export { HeaderColumn } from "./HeaderColumn";
import { ColumnAllTypes } from "@/data/dataTypes";
import { handleUpdateColumnType } from "../hooks";

export interface HeaderColumnProps {
    type: string;
    all_titles: ColumnAllTypes;
    id: string;
    handleRemoveColumn: (id: string) => void;
    column_title: string;
    handleUpdateColumnType: handleUpdateColumnType;
}

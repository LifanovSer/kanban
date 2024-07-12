export { HeaderColumn } from "./HeaderColumn";
import { ColumnAllTypes } from "@/data/dataTypes";
import { handleUpdateColumnType } from "../useFeatures/useFeaturesTypes";

export interface HeaderColumnProps {
    type: string;
    all_titles: ColumnAllTypes;
    id: string;
    handleRemoveColumn: (id: string) => void;
    column_title: string;
    handleUpdateColumnType: handleUpdateColumnType;
}

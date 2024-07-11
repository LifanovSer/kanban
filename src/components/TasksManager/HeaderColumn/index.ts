export { HeaderColumn } from "./HeaderColumn";
import { ColumnAllTypes } from "@/data/dataTypes";
import { handleUpdateColumnType } from "../useFeatures/useFeaturesTypes";

// interface AllTitles {
//     type: string;
//     column_title: string;
// }

// type OpenSelects = { [key: string]: boolean };

export interface HeaderColumnProps {
    type: string;
    all_titles: ColumnAllTypes;
    id: string;
    // openSelect: OpenSelect;
    // handleOpenSelect: (id: string | null, isOpen: boolean) => void;
    // openSelects: OpenSelects;
    // handleOpenSelect: (string: string) => void;
    // newTitle: null | string;
    // handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleRemoveColumn: (id: string) => void;
    column_title: string;
    handleUpdateColumnType: handleUpdateColumnType;
}

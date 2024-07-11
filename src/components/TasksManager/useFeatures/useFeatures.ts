import { useLocalStorage } from "@/shared/utils/useLocalStorage/useLocalStorage ";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { board, columnTypes } from "../../../data/data";
import {
    Board,
    BoardItem,
    ColumnAllTypes,
    Tasks,
} from "../../../data/dataTypes";
import {
    handleAddColumn,
    handleAddTask,
    handleRemoveColumn,
    handleUpdate,
} from "./useFeaturesTypes";

export const useFeatures = () => {
    // const [visibleCount, setVisibleCount] = useState(3);
    // const [columns, setColumns] = useState<Board>(board);
    const [columns, setColumns] = useLocalStorage<Board>("board", board);
    const [columnTitles, setColumnTitles] =
        useState<ColumnAllTypes>(columnTypes);

    // const [columnTitles, setColumnTitle] = useState(
    //     columns.map((item) => ({
    //         type: item.type,
    //         column_title: item.column_title,
    //     })),
    // );

    // useEffect(() => {
    //     setColumns("board");
    // }, [columns]);

    const handleAddColumn: handleAddColumn = () => {
        // setVisibleCount((prevValue) => Math.min(prevValue + 1, columns.length));
        const newColumn = {
            id: uuidv4(),
            type: "",
            column_title: "",
            tasks: [],
        };

        setColumns([...columns, newColumn]);
    };

    const handleUpdate: handleUpdate = (updatedTasks, currentColumnId) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === currentColumnId
                    ? { ...column, tasks: updatedTasks }
                    : column,
            ),
        );
    };

    const handleUpdateColumnType = (
        columnId: string,
        columnType: string,
        column_title: string,
    ) => {
        const currentColumnIndex = columns.findIndex(
            (column: BoardItem) => column.id === columnId,
        );

        if (currentColumnIndex !== -1) {
            setColumns((prevColumns) => {
                const copyColums = structuredClone(prevColumns);
                copyColums[currentColumnIndex] = {
                    ...copyColums[currentColumnIndex],
                    type: columnType,
                    column_title,
                };

                return copyColums;
            });
        }
    };

    const handleAddTask: handleAddTask = (columnId: string) => {
        const newTask: Tasks = {
            id: uuidv4(),
            number: `#${Math.floor(Math.random() * 100000)}`,
            title: "Новая задача",
        };
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === columnId
                    ? { ...column, tasks: [...column.tasks, newTask] }
                    : column,
            ),
        );
    };

    const handleRemoveColumn: handleRemoveColumn = (columnId) => {
        setColumns((prevColumns) =>
            prevColumns.filter((column) => {
                return column.id !== columnId;
            }),
        );

        // setVisibleCount((prevCount) => prevCount - 1);
    };

    return {
        columns,
        columnTitles,
        // columnsLength: board.length,

        // visibleCount,
        handleUpdate,
        handleAddTask,
        handleRemoveColumn,
        handleAddColumn,
        handleUpdateColumnType,
    };
};

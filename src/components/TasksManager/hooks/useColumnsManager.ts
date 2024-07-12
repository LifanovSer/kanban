import { board, columnTypes } from "@/data/data";
import { Board, BoardItem, ColumnAllTypes, Tasks } from "@/data/index";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    handleAddColumn,
    handleAddTask,
    handleRemoveColumn,
    handleUpdate,
} from ".";

export const useColumnsManager = () => {
    const [columns, setColumns] = useState<Board>(() => {
        const item = window.localStorage.getItem("columns");
        return item ? JSON.parse(item) : board;
    });

    const [columnTitles, setColumnTitles] =
        useState<ColumnAllTypes>(columnTypes);

    useEffect(() => {
        window.localStorage.setItem("columns", JSON.stringify(columns));
    }, [columns]);
    const handleAddColumn: handleAddColumn = () => {
        const newColumn = {
            id: uuidv4(),
            type: columnTitles[0].type,
            column_title: columnTitles[0].column_title,
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
    };

    return {
        columns,
        columnTitles,
        setColumnTitles,
        handleUpdate,
        handleAddTask,
        handleRemoveColumn,
        handleAddColumn,
        handleUpdateColumnType,
    };
};

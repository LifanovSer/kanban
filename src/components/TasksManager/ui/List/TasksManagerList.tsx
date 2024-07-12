import { BoardItem } from "@/data/index";
import { UiSvgIcon } from "@/shared/ui";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { TasksManagerListProps } from ".";
import { HeaderColumn } from "../../HeaderColumn/index";
import { Task } from "../Task/Task";
import styleList from "./TasksList.module.scss";

export const TasksManagerList: React.FC<TasksManagerListProps> = ({
    columns,
    columnTitles,
    handleAddTask,
    handleRemoveColumn,
    handleUpdate,
    handleUpdateColumnType,
}) => {
    return (
        <div
            className={`${styleList["column-list"]} ${styleList["column-list--position"]}`}
        >
            {columns.map((column: BoardItem) => {
                return (
                    <div
                        key={column.id}
                        className={`${styleList["column-list__column"]} ${styleList["column-list__column--position"]}`}
                    >
                        <HeaderColumn
                            type={column.type}
                            column_title={column.column_title}
                            all_titles={columnTitles}
                            id={column.id}
                            handleRemoveColumn={handleRemoveColumn}
                            handleUpdateColumnType={handleUpdateColumnType}
                        />
                        <ReactSortable
                            list={column.tasks}
                            setList={(updatedList) =>
                                handleUpdate(updatedList, column.id)
                            }
                            animation={150}
                            group="shared-group-name"
                            className={`${styleList["column-list__react-sortable-task"]} ${column.tasks.length === 0 ? styleList["column-list__react-sortable-task--full-height"] : ""}`}
                        >
                            {column.tasks.map((task) => {
                                return (
                                    <Task
                                        key={task.id}
                                        id={task.id}
                                        title={task.title}
                                        number={task.number}
                                        column_type={column.type}
                                    />
                                );
                            })}
                        </ReactSortable>
                        <button
                            onClick={() => handleAddTask(column.id)}
                            className={`${styleList["column-list__add-tasks-button"]} ${column.tasks.length === 0 ? styleList["add-tasks-button--top-position"] : ""}`}
                        >
                            <UiSvgIcon
                                name="plus-add-button"
                                width="14"
                                height="14"
                            />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

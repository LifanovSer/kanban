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
    // const [openSelect, setOpenSelect] = useState<OpenSelect>({
    //     id: null,
    //     isOpen: true,
    // });

    // const handleOpenSelect = (id: string | null, isOpen: boolean) => {
    //     setOpenSelect({ id: id, isOpen: isOpen });
    // };

    // const [openSelects, setOpenSelects] = useState<{ [key: string]: boolean }>(
    //     {},
    // );

    // const handleOpenSelect = (id: string) => {
    //     setOpenSelects((prev) => ({
    //         ...prev,
    //         [id]: !prev[id],
    //     }));
    // };

    return (
        <div
            className={`${styleList["column-list"]} ${styleList["columns-position"]}`}
        >
            {columns.map((column) => {
                return (
                    <div
                        key={column.id}
                        className={`${styleList["column"]} ${styleList["column-position"]}`}
                    >
                        <HeaderColumn
                            type={column.type}
                            column_title={column.column_title}
                            all_titles={columnTitles}
                            id={column.id}
                            handleRemoveColumn={handleRemoveColumn}
                            // openSelects={openSelects}
                            // handleOpenSelect={handleOpenSelect}
                            handleUpdateColumnType={handleUpdateColumnType}
                        />
                        <ReactSortable
                            list={column.tasks}
                            setList={(updatedList) =>
                                handleUpdate(updatedList, column.id)
                            }
                            animation={150}
                            group="shared-group-name"
                            className={styleList["react-sortable-task"]}
                        >
                            {column.tasks.map((task) => {
                                return (
                                    <Task
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
                            className={styleList["add-tasks-button"]}
                        >
                            {/* <PlusButton /> */}
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

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactSortable } from "react-sortablejs";
import styleColumn from "./TaskColumns.module.css";
import { board } from "../../../data/data";
import { Tasks, BoardItem, Board } from "../../../data/dataTypes";
import {
  handleUpdate,
  handleAddTask,
  handleRemoveColumn,
  handleEditTitleColumn,
} from "./TaskColumnsTypes";
import { HeaderColumn } from "./HeaderColumn/HeaderColumn";
import firstUser from "@img/first-user.png";
import secondUser from "@img/second-user.png";
import scale from "@img/progress-scale.png";
import PlusButton from "@img/plus-add-button.svg?react";

export const TaskColumns = () => {
  const [columns, setColumns] = useState<Board>(board);

  const handleUpdate: handleUpdate = (updatedTasks, currentColumnId) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === currentColumnId
          ? { ...column, tasks: updatedTasks }
          : column
      )
    );
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
          : column
      )
    );
  };

  const handleEditTitleColumn: handleEditTitleColumn = (columnId, newValue) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId ? { ...column, type: newValue } : column
      )
    );
  };

  const handleRemoveColumn: handleRemoveColumn = (columnId) => {
    setColumns((prevColumns) =>
      prevColumns.filter((column) => {
        return column.id !== columnId;
      })
    );
  };

  return (
    <div
      className={`${styleColumn["column-list"]} ${styleColumn["columns-position"]}`}
    >
      {columns.map((column) => {
        return (
          <div key={column.id} className={styleColumn["column"]}>
            <HeaderColumn
              type={column.type}
              id={column.id}
              img={column.img}
              handleRemoveColumn={handleRemoveColumn}
              handleEditTitleColumn = {handleEditTitleColumn}
            />
            <ReactSortable
              list={column.tasks}
              setList={(updatedList) => handleUpdate(updatedList, column.id)}
              animation={150}
              group="shared-group-name"
              className={styleColumn["react-sortable-task"]}
            >
              {column.tasks.map((task) => {
                return (
                  <div key={task.id} className={styleColumn["task"]}>
                    <div className={styleColumn["left-side"]}>
                      <div className={styleColumn["wrapper-users-pictures"]}>
                        <img
                          src={firstUser}
                          alt="first user"
                          className={`${styleColumn["user-picture"]} ${styleColumn["position-picture"]}`}
                        />
                        <img
                          src={secondUser}
                          alt="second user"
                          className={`${styleColumn["user-picture"]} ${styleColumn["second-picture"]}`}
                        />
                      </div>

                      <img
                        src={scale}
                        className={`${styleColumn["progress-scale"]} ${styleColumn["progress-scale-position"]}`}
                        alt="progress-scale"
                      />
                    </div>
                    <div className={styleColumn["right-side"]}>
                      <p className={styleColumn["task-text"]}>
                        {" "}
                        <span className={styleColumn["task-number"]}>
                          {`${task.number}: `}
                        </span>{" "}
                        {task.title}{" "}
                      </p>
                    </div>
                  </div>
                );
              })}
            </ReactSortable>
            <button
              onClick={() => handleAddTask(column.id)}
              className={styleColumn["add-tasks-button"]}
            >
              <PlusButton />
            </button>
          </div>
        );
      })}
    </div>
  );
};

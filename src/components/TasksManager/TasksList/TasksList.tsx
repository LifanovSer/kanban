import React from "react";
import { TaskColumns } from "../TaskColumns/TaskColumns";
import styleList from "./TasksList.module.css";
import ProcessesIcon from "@img/processes.svg?react";

export const TasksList = () => {
  return (
    <>  
    <div className={`${styleList["wrapper-processes"]} ${styleList["top-margin"]}`}>
      <div className={styleList["left-side"]}>
        <ProcessesIcon className={styleList["processes-icon"]} />
        <span className={styleList["processes-text"]}>
          Процессы проекта CRM - система
        </span>
      </div>
      <button className={styleList["button-add-columns"]}>
        добавить столбец
      </button>
    </div>
        <TaskColumns />
        </>
  );
};

import React from "react";
import { TasksList } from "./TasksList/TasksList";
import styleTasks from "./TasksManager.module.css";
import PlayButton from "@img/playButton.svg?react";


export const TasksManager = () => {
  return (
    <section className={styleTasks["tasks-manager"]}>
      <div className={styleTasks["wrapper-titles"]}>
        <h1 className={styleTasks["title-block"]}>Проекты</h1>
        <div className={styleTasks["wrapper-additional-info"]}>
          <PlayButton className={styleTasks["play-button"]} />
          <span className={styleTasks["name-block"]}>CRM-система /</span>
          <span className={styleTasks["add-text"]}>Процессы</span>
        </div>
      </div>
      <TasksList />
    </section>
  );
};

import React from "react";
import asideStyle from "./Aside.module.css";
import Loupe from "@img/loupe.svg?react";
import Plus from "@img/plus.svg?react";
import NewMenu from "@img/newMenu.svg?react";
import Question from "@img/questionIcon.svg?react";
import Arrow from "@img/arrow.svg?react";

export const Aside = () => {
  return (
    <aside className={asideStyle["aside"]}>
      <div className={asideStyle["sidebar"]}>
        <button className={asideStyle["sidebar-button"]}>
            <Loupe />
        </button>
        <button className={asideStyle["sidebar-button"]}>
        <Plus />
        </button>
        <button className={asideStyle["sidebar-button"]}>
        <NewMenu />
        </button>
      </div>
        <button className={asideStyle["show-full-menu"]}>
            <Arrow className={asideStyle["arrow"]} />
        </button>
      <div className={asideStyle["wrapper-question"]}>
        <Question />
      </div>
    </aside>
  );
};

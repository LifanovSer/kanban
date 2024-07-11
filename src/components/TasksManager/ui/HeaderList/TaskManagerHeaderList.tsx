import { UiSvgIcon } from "@/shared/ui";
import React from "react";
import { TaskManagerHeaderListProps } from ".";
import styles from "./TaskManagerHeaderList.module.scss";

export const TaskManagerHeaderList: React.FC<TaskManagerHeaderListProps> = ({
    handleAddColumn,
}) => {
    return (
        <div
            className={`${styles["wrapper-processes"]} ${styles["top-margin"]}`}
        >
            <div className={styles["left-side-top"]}>
                <UiSvgIcon
                    name="processes-icon"
                    width="20"
                    height="18"
                    color="#3D4044"
                    className={styles["processes-icon"]}
                />
                <span className={styles["processes-text"]}>
                    Процессы проекта CRM - система
                </span>
            </div>

            <button
                onClick={() => handleAddColumn()}
                className={styles["button-add-columns"]}
            >
                добавить столбец
            </button>
        </div>
    );
};

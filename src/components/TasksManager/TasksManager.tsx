import { UiSvgIcon } from "@/shared/ui";
import { useFeatures } from "./hooks/useColumnsManager";
import styles from "./TasksManager.module.scss";
import {
    TaskManagerBreadcrumbs,
    TaskManagerHeaderList,
    TasksManagerList,
} from "./ui/";

export const TasksManager = () => {
    const {
        columns,
        columnTitles,
        handleUpdate,
        handleAddTask,
        handleRemoveColumn,
        handleAddColumn,
        handleUpdateColumnType,
    } = useFeatures();
    return (
        <section className={styles["tasks-manager"]}>
            <div className={styles["tasks-manager__wrapper"]}>
                <h1 className={styles["tasks-manager__title"]}>Проекты</h1>

                <TaskManagerBreadcrumbs
                    icon={<UiSvgIcon name="play-icon" width="20" height="20" />}
                />
            </div>

            <TaskManagerHeaderList handleAddColumn={handleAddColumn} />

            <TasksManagerList
                columns={columns}
                columnTitles={columnTitles}
                handleAddTask={handleAddTask}
                handleRemoveColumn={handleRemoveColumn}
                handleUpdate={handleUpdate}
                handleUpdateColumnType={handleUpdateColumnType}
            />
        </section>
    );
};

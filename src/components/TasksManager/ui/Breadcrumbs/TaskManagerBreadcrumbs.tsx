import { TaskManagerBreadcrumbsProps } from ".";
import styles from "./TaskManagerBreadcrumbs.module.scss";

export const TaskManagerBreadcrumbs: React.FC<TaskManagerBreadcrumbsProps> = ({
    icon,
    platform = "CRM - система",
    chapter = "Процессы",
}) => {
    return (
        <div className={styles["task-manager-breadcrumbs"]}>
            {icon && icon}
            <span
                className={styles["task-manager-breadcrumbs__platform-title"]}
            >
                {platform}
            </span>
            <span className={styles["task-manager-breadcrumbs__separation"]}>
                /
            </span>
            <span className={styles["task-manager-breadcrumbs__chapter"]}>
                {chapter}
            </span>
        </div>
    );
};

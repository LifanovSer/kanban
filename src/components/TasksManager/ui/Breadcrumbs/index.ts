import { ReactNode } from "react";

export { TaskManagerBreadcrumbs } from "./TaskManagerBreadcrumbs";

export interface TaskManagerBreadcrumbsProps {
    icon?: ReactNode;
    platform?: string;
    chapter?: string;
}

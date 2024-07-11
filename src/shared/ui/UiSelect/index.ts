import React from "react";

export { UiSelect } from "./UiSelect";

export interface UiSelectProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

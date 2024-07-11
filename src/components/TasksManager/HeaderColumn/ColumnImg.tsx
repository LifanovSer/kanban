import { UiSvgIcon } from "@/shared/ui";
import React from "react";

interface ColumnImgProps {
    type: string | undefined;
    className: string;
}

export const ColumnImg: React.FC<ColumnImgProps> = ({ type, className }) => {
    switch (type) {
        case "base":
            return <UiSvgIcon name="base" className={className} />;
        case "works":
            return <UiSvgIcon name="play-button-blue" className={className} />;

        case "completed":
            return <UiSvgIcon name="completed" className={className} />;

        case "passed":
            return <UiSvgIcon name="passed" className={className} />;
        case "cancelled":
            return <UiSvgIcon name="cancel-icon" className={className} />;
        case "waiting":
            return <UiSvgIcon name="wait-icon" className={className} />;
        case "modification":
            return <UiSvgIcon name="modification-icon" className={className} />;
        default:
            return <UiSvgIcon name="base" className={className} />;
    }
};

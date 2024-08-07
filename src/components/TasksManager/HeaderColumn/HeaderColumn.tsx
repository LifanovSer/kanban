import { UiSvgIcon } from "@/shared/ui";
import { UiSelect } from "@/shared/ui/UiSelect";
import React, { useState } from "react";
import { HeaderColumnProps } from ".";
import { ColumnImg } from "./ColumnImg";
import styleHeader from "./HeaderColumn.module.scss";

export const HeaderColumn: React.FC<HeaderColumnProps> = ({
    type,
    column_title,
    all_titles,
    id,
    handleRemoveColumn,
    handleUpdateColumnType,
}) => {
    const [openSelects, setOpenSelects] = useState<null | string>(null);

    const handleOpenSelect = (id: string) => {
        setOpenSelects((prev) => (prev === id ? null : id));
    };

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const currentColumnTitle = all_titles.find(
            ({ column_title }) => column_title === event.target.value,
        );

        if (currentColumnTitle) {
            handleUpdateColumnType(
                id,
                currentColumnTitle.type,
                event.target.value as string,
            );
        }
    };

    return (
        <div className={styleHeader["header-column"]}>
            <div className={styleHeader["header-column__wrapper-type"]}>
                <ColumnImg
                    type={type}
                    className={styleHeader["header-column__picture-type"]}
                />
                {type === "new" || openSelects === id ? (
                    <UiSelect
                        title={column_title}
                        onChange={handleSelectChange}
                        className={styleHeader["header-column__label-select"]}
                    >
                        {all_titles.map((titles) => (
                            <option key={titles.id} value={titles.column_title}>
                                {titles.column_title}
                            </option>
                        ))}
                    </UiSelect>
                ) : (
                    <span className={styleHeader["header-column__name-type"]}>
                        {!column_title
                            ? all_titles[0].column_title
                            : column_title}
                    </span>
                )}
            </div>
            <div className={styleHeader["header-column__wrapper-buttons"]}>
                <button
                    onClick={() => handleOpenSelect(id)}
                    className={styleHeader["header-column__change-button"]}
                >
                    <UiSvgIcon
                        name="edit"
                        width="15"
                        height="15"
                        className={styleHeader["header-column__svg-picture"]}
                    />
                </button>
                <button
                    onClick={() => handleRemoveColumn(id)}
                    className={styleHeader["header-column__change-button"]}
                >
                    <UiSvgIcon
                        name="trash"
                        width="15"
                        height="15"
                        className={styleHeader["header-column__svg-picture"]}
                    />
                </button>
            </div>
        </div>
    );
};

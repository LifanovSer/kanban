import { UiSelectProps } from ".";

export const UiSelect: React.FC<UiSelectProps> = ({
    title,
    children,
    className,
    onChange,
}) => {
    return (
        <label className={className}>
            Выберите статус
            <select
                name="selectedTitle"
                defaultValue={title}
                onChange={onChange}
            >
                {children}
            </select>
        </label>
    );
};

import { UiSvgIconProps } from ".";

export const UiSvgIcon: React.FC<UiSvgIconProps> = ({
    name,
    prefix = "icon",
    color = "#333",
    ...props
}) => {
    const symbolId = `#${prefix}-${name}`;

    return (
        <svg {...props} aria-hidden="true">
            <use href={symbolId} style={{ color: color }} fill={color} />
        </svg>
    );
};

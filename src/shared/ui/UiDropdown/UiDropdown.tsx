import { UiSvgIcon } from "@shared/ui/";
import { useEffect, useRef, useState } from "react";
import { UiDropdownProps } from ".";
import styles from "./UiDropdown.module.scss";

export const UiDropdown: React.FC<UiDropdownProps> = ({
    title,
    hasIcon,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <button
            onClick={toggleDropdown}
            className={styles["ui-dropdown"]}
            ref={dropdownRef}
        >
            <div className={styles["ui-dropdown__title"]}>{title}</div>

            {isOpen && (
                <div className={styles["ui-dropdown__content"]}>{children}</div>
            )}

            {hasIcon && (
                <UiSvgIcon
                    name="arrow-icon"
                    color="#fff"
                    width="15px"
                    height="8px"
                    className={
                        styles["ui-dropdown__icon"] +
                        (isOpen ? " " + styles["ui-dropdown__icon_active"] : "")
                    }
                />
            )}
        </button>
    );
};

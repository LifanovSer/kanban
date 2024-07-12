import { UiSvgIcon } from "@/shared/ui";
import { useState } from "react";
import styles from "./Aside.module.scss";

export const Aside = () => {
    const [isShow, setIsShow] = useState(false);

    const handleMenu = () => {
        setIsShow(!isShow);
    };

    return (
        <aside
            className={`${styles["aside"]} ${!isShow ? styles["aside--collapsed"] : ""}`}
        >
            <nav className={styles["aside__sidebar"]}>
                <div className={styles["aside__wrapper-sidebar-buttons"]}>
                    <ul
                        className={`${styles["aside__buttons-list"]} ${styles["aside__buttons-list--position"]} `}
                    >
                        <li className={styles["aside__button-item"]}>
                            <button
                                className={`${styles["aside__sidebar-button"]} ${!isShow ? styles["aside__sidebar-button-medium-screen"] : ""}`}
                            >
                                <UiSvgIcon
                                    name="loupe-icon"
                                    color="#fff"
                                    width="20"
                                    height="20"
                                    className={styles["aside__svg-button"]}
                                />
                                <span
                                    className={`${styles["aside__button-text"]} ${!isShow ? styles["aside__button-text--hide"] : ""}`}
                                >
                                    Поиск
                                </span>
                            </button>
                        </li>
                        <li className={styles["aside__button-item"]}>
                            <button
                                className={`${styles["aside__sidebar-button"]} ${!isShow ? styles["aside__sidebar-button-medium-screen"] : ""}`}
                            >
                                <UiSvgIcon
                                    name="plus-icon"
                                    color="#fff"
                                    width="20"
                                    height="20"
                                    className={styles["aside__svg-button"]}
                                />
                                <span
                                    className={`${styles["aside__button-text"]} ${!isShow ? styles["aside__button-text--hide"] : ""}`}
                                >
                                    Добавить
                                </span>
                            </button>
                        </li>
                        <li className={styles["aside__button-item"]}>
                            <button
                                className={`${styles["aside__sidebar-button"]} ${!isShow ? styles["aside__sidebar-button-medium-screen"] : ""}`}
                            >
                                <UiSvgIcon
                                    name="menu-icon"
                                    color="#fff"
                                    width="20"
                                    height="20"
                                    className={styles["aside__svg-button"]}
                                />
                                <span
                                    className={`${styles["aside__button-text"]} ${!isShow ? styles["aside__button-text--hide"] : ""}`}
                                >
                                    Меню
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <button
                onClick={() => {
                    handleMenu();
                }}
                className={styles["aside__full-menu"]}
            >
                <UiSvgIcon
                    name="arrow-icon"
                    color="#fff"
                    width="20"
                    height="20"
                    className={`${styles["aside__arrow"]} ${isShow ? styles["aside__arrow--back"] : ""}`}
                />
            </button>

            <ul
                className={`${styles["aside__bottom-buttons-list"]} ${styles["aside__bottom-buttons-list--position"]}`}
            >
                <li className={styles["aside__bottom-button-item"]}>
                    <button
                        className={`${styles["aside__button-question"]} ${!isShow ? styles["aside__button-question-medium-screen"] : ""}`}
                    >
                        <UiSvgIcon
                            name="question-icon"
                            color="#fff"
                            width="24"
                            height="24"
                            className={styles["aside__svg-button"]}
                        />
                        <span
                            className={`${styles["aside__button-text"]} ${!isShow ? styles["aside__button-text--hide"] : ""}`}
                        >
                            Вопросы
                        </span>
                    </button>
                </li>
            </ul>
        </aside>
    );
};

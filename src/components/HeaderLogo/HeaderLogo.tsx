import { UiSvgIcon } from "@/shared/ui";
import { useMedia } from "@/shared/utils/breakpoints";
import styles from "./HeaderLogo.module.scss";

export const HeaderLogo = () => {
    const { isSm } = useMedia();
    return (
        <div className={styles["header-logo"]}>
            <a href="#" className={styles["header-logo__link"]}>
                <UiSvgIcon
                    width="25px"
                    height="24px"
                    name="settings-icon"
                    color="#fff"
                />
            </a>
            {!isSm && (
                <p className={styles["header-logo__title"]}>eveli.todo</p>
            )}
        </div>
    );
};

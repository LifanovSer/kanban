import { HeaderLogo } from "@/components/HeaderLogo/HeaderLogo";
import { UserInfo } from "@/components/UserInfo";
import { UiDropdown } from "@/shared/ui";
import { HeaderMobileProps } from ".";
import styles from "./HeaderMobile.module.scss";

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ linkList }) => {
    return (
        <header className={styles["header-mobile"]}>
            <HeaderLogo />

            <div className={styles["header-mobile__wrapper"]}>
                <UiDropdown
                    title={
                        <p className={styles["header-mobile__link-list-title"]}>
                            Навигация
                        </p>
                    }
                    hasIcon={false}
                    children={
                        <div className={styles["header-mobile__link-list"]}>
                            {linkList.map((link, index) => (
                                <a key={index} href={link.link}>
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    }
                />

                <UserInfo />
            </div>
        </header>
    );
};

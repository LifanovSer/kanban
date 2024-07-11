import { HeaderLogo } from "@/components/HeaderLogo/HeaderLogo";
import { NavDesktop } from "@/components/NavDesktop";
import { UserInfo } from "@/components/UserInfo";
import { HeaderDesktopProps } from ".";
import styles from "./HeaderDesktop.module.scss";

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ linkList }) => {
    return (
        <header className={styles["header-desktop"]}>
            <HeaderLogo />

            <NavDesktop linkList={linkList} />

            <UserInfo />
        </header>
    );
};

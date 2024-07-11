import { NavDesktopProps } from ".";
import styles from "./Nav.module.scss";

export const NavDesktop: React.FC<NavDesktopProps> = ({ linkList }) => {
    return (
        <nav className={styles["nav"]}>
            {linkList.map((link, index) => (
                <a
                    key={index}
                    href={link.link}
                    className={`${styles["nav__link"]} ${
                        link.isActive ? styles["nav__link_active"] : ""
                    }`}
                >
                    {link.title}
                </a>
            ))}
        </nav>
    );
};

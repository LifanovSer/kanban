import { UiAvatarProps } from ".";
import styles from "./UiAvatar.module.scss";

export const UiAvatar: React.FC<UiAvatarProps> = ({ src, alt, name, role }) => {
    return (
        <div className={styles.avatar} aria-label={`Avatar of ${name}`}>
            <img src={src} alt={alt} className={styles.avatar__image} />
            <div className={styles.avatar__info}>
                <span className={styles.avatar__name}>{name}</span>
                {role && <span className={styles.avatar__role}>{role}</span>}
            </div>
        </div>
    );
};

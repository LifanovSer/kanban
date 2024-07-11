import AvatarImage from "@/img/avatar.webp";
import { UiAvatar, UiDropdown, UiSvgIcon } from "@shared/ui";
import { useMedia } from "@shared/utils/breakpoints";
import styles from "./UserInfo.module.scss";

export const UserInfo = () => {
    const { isSm } = useMedia();

    return (
        <div className={styles["user-info"]}>
            <div className={styles["user-info__summ"]}>
                {!isSm && (
                    <>
                        <span className={styles["user-info__money-amount"]}>
                            {" "}
                            60 000
                        </span>
                        <span className={styles["user-info__currency"]}>
                            {" "}
                            &#8381;{" "}
                        </span>

                        <UiSvgIcon
                            name="notification-icon"
                            width="22"
                            height="22"
                            className={styles["user-info__notification-icon"]}
                        />
                    </>
                )}
            </div>

            <UiDropdown
                title={
                    <UiAvatar
                        name="Назир"
                        src={AvatarImage}
                        alt="avatar image photo"
                    />
                }
                hasIcon
            >
                <div>Option 1</div>
                <div>Option 2</div>
                <div>Option 3</div>
            </UiDropdown>
        </div>
    );
};

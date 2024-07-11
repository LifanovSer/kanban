import firstUser from "@img/first-user.png";
import scale from "@img/progress-scale.png";
import secondUser from "@img/second-user.png";
import { TaskProps } from ".";
import style from "./Task.module.scss";

export const Task: React.FC<TaskProps> = ({
    id,
    column_type,
    number,
    title,
}) => {
    return (
        <div key={id} className={style["task"]}>
            <div className={style["task__left-side"]}>
                <div className={style["task__wrapper-users-pictures"]}>
                    <img
                        src={firstUser}
                        alt="first user"
                        className={`${style["task__user-picture"]} ${style["task__position-picture"]}`}
                    />
                    <img
                        src={secondUser}
                        alt="second user"
                        className={`${style["task__user-picture"]} ${style["task__second-picture"]}`}
                    />
                </div>

                <img
                    src={scale}
                    className={`${style["task__progress-scale"]} ${style["task__progress-scale-position"]}`}
                    alt="progress-scale"
                />
            </div>
            <div className={style["task__right-side"]}>
                <p
                    className={` ${style["task__task-text"]}  ${column_type === "completed" ? style["completed-task"] : ""}`}
                >
                    {" "}
                    <span className={style["task__task-number"]}>
                        {`${number}: `}
                    </span>{" "}
                    {title}{" "}
                </p>
            </div>
        </div>
    );
};

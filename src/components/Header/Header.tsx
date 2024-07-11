import { HeaderDesktop } from "@/components/HeaderDesktop";
import { HeaderMobile } from "@/components/HeaderMobile";
import { useMedia } from "@/shared/utils/breakpoints";

export const Header = () => {
    const { isXl } = useMedia();

    const linkList = [
        {
            title: "Задачи",
            link: "#",
            isActive: false,
        },
        {
            title: "Проекты",
            link: "#",
            isActive: true,
        },
        {
            title: "Статистика",
            link: "#",
            isActive: false,
        },
        {
            title: "Финансы",
            link: "#",
            isActive: false,
        },
        {
            title: "План",
            link: "#",
            isActive: false,
        },
        {
            title: "Пользователи",
            link: "#",
            isActive: false,
        },
    ];

    return (
        <>
            {!isXl && <HeaderDesktop linkList={linkList} />}
            {isXl && <HeaderMobile linkList={linkList} />}
        </>
    );
};

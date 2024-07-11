export { NavDesktop } from "./NavDesktop";

export interface NavDesktopProps {
    linkList: Array<{ title: string; link: string; isActive: boolean }>;
}

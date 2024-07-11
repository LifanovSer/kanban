import { useMediaQuery } from "@react-hook/media-query";

export const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};

export const useMedia = () => {
    const isXl = useMediaQuery(
        `only screen and (max-width: ${breakpoints.xl}px)`,
    );

    const isSm = useMediaQuery(
        `only screen and (max-width: ${breakpoints.sm}px)`,
    );

    return {
        isXl,
        isSm,
    };
};

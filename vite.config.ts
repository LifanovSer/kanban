import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),

        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "src/icons")],
            symbolId: "icon-[dir]-[name]",
        }),
    ],
    resolve: {
        alias: {
            "@img": path.resolve(__dirname, "src/img"),
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
        },
    },
});

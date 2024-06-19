import { defineConfig } from "vite";
import glob from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: 'src',
  base: './Green-Harvest/',
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html"),
    },
    outDir: "../dist",
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])],
  base: "/Green-Harvest/",
});

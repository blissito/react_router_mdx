import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tsconfigPaths from "vite-tsconfig-paths";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import { reactRouter } from "@react-router/dev/vite";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default defineConfig({
  server: { port: 3000 },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypePrettyCode],
    }),
    ,
    reactRouter(),
    tsconfigPaths(),
  ],
});

import typescript from "@rollup/plugin-typescript";
import typescriptEngine from "typescript";
import postcss from "rollup-plugin-postcss";

const config = {
  input: "src/components/React-Image-Selector/react-image-selector.tsx",
  output: {
    file: "dist/index.js",
    // format: "cjs",
  },
  plugins: [
    typescript({
      typescript: typescriptEngine,
    }),
    postcss({
      plugins: [],
      minimize: true,
    }),
  ],
};

export default config;

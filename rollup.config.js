import typescript from "@rollup/plugin-typescript";
// import typescriptEngine from "typescript";
import postcss from "rollup-plugin-postcss";

const config = {
  input: "src/components/React-Image-Selector/react-image-selector.tsx",
  output: {
    dir: "dist",
    // format: "cjs",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      plugins: [],
      minimize: true,
    }),
  ],
};

export default config;

import typescript from "@rollup/plugin-typescript";
// import typescriptEngine from "typescript";
import postcss from "rollup-plugin-postcss";

const config = {
  input: "src/components/React-Images-Selector/react-images-selector.tsx",
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
  external: ["react/jsx-runtime"], // <-- suppresses the warning
};

export default config;

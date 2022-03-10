import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

const config = {
  input: "src/components/React-Image-Selector/react-image-selector.tsx",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    typescript(),
    postcss({
      plugins: [],
      minimize: true,
    }),
  ],
};

export default config;

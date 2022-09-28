import { Options } from "tsup";

const options: Options = {
    name: "tsup",
    target: "node16",
    entry: ["src/index.ts"],
    outDir: "dist",
    format: "esm",
    sourcemap: true,
    clean: true,
    minify: true,
};
export default options;

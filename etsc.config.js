const esbuildPluginTsc = require("esbuild-plugin-tsc");

module.exports = {
  outDir: "./dist",
  esbuild: {
	format: "commonjs",
	entryPoints: ["./src/index.ts"],
	outdir: "./dist",
	tsconfig: "./tsconfig.json",
	plugins: [esbuildPluginTsc()],
  },
};

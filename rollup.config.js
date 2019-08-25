require("dotenv").config();

import babel from "rollup-plugin-babel";
import tslint from "rollup-plugin-tslint";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import json from "rollup-plugin-json";
import { uglify } from "rollup-plugin-uglify";
import strip from "rollup-plugin-strip";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

import pkg from "./package.json";

const input = "./src/index.ts";
const extensions = [".js", ".jsx", ".ts", ".tsx"];

// Treat as externals all not relative and not absolute paths
// e.g. 'react'
const excludeAllExternals = id => !id.startsWith(".") && !id.startsWith("/");

const getBabelOptions = ({ useESModules }) => ({
  babelrc: false,
  exclude: "node_modules/**",
  runtimeHelpers: true,
  presets: [["react-app", { typescript: true, useESModules }]],
  extensions
});

const commonjsArgs = {
  include: "node_modules/**"
};

export default [
  // Universal module definition (UMD) build
  // - including console.* statements
  {
    input,
    output: {
      file: "dist/single-purpose-emitter.js",
      format: "umd",
      name: "SinglePurposeEmitter",
      sourcemap: true
    },
    plugins: [
      tslint({ throwOnError: true }),
      external(),
      json(),
      url({ exclude: ["**/*.svg"] }),
      svgr(),
      babel(getBabelOptions({ useESModules: true })),
      resolve({ extensions }),
      commonjs(commonjsArgs),
      sizeSnapshot()
    ]
  },

  // Minified UMD build
  {
    input,
    output: {
      file: "dist/single-purpose-emitter.min.js",
      format: "umd",
      name: "SinglePurposeEmitter"
    },
    plugins: [
      tslint({ throwOnError: true }),
      external(),
      json(),
      url({ exclude: ["**/*.svg"] }),
      svgr(),
      babel(getBabelOptions({ useESModules: true })),
      resolve({ extensions }),
      commonjs(commonjsArgs),
      strip({ debugger: true }),
      uglify(),
      sizeSnapshot()
    ]
  },

  // CommonJS (cjs) build
  // - Keeping console.log statements
  // - All external packages are not bundled
  {
    input,
    output: { file: pkg.main, format: "cjs", sourcemap: true },
    external: excludeAllExternals,
    plugins: [
      tslint({ throwOnError: true }),
      json(),
      resolve({ extensions }),
      commonjs(commonjsArgs),
      url({ exclude: ["**/*.svg"] }),
      svgr(),
      babel(getBabelOptions({ useESModules: false })),
      sizeSnapshot()
    ]
  },

  // EcmaScript Module (esm) build
  // - Keeping console.log statements
  // - All external packages are not bundled
  {
    input,
    output: { file: pkg.module, format: "esm", sourcemap: true },
    external: excludeAllExternals,
    plugins: [
      tslint({ throwOnError: true }),
      json(),
      resolve({ extensions }),
      url({ exclude: ["**/*.svg"] }),
      svgr(),
      babel(getBabelOptions({ useESModules: true })),
      sizeSnapshot()
    ]
  }
];

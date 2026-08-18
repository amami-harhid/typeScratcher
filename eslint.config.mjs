'use strict'

import {eslint_S3_config} from "./eslint-plugin/index.js";
import {eslint_TS_loop_config} from "./eslint-plugin/index.js";
import {eslint_TS_async_config} from "./eslint-plugin/index.js";

const build_eslint_config = [
    ...eslint_TS_loop_config,
    ...eslint_TS_async_config,
    ...eslint_S3_config,
    {
        ignores: ["**/*.d.ts","src/**/*.ts", "", "eslint-plugin/**/*.js"],
    },
    {
        plugins: {},
    },

];
export default build_eslint_config;
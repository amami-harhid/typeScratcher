'use strict'
/**
 * 【no-restricted-syntax】 
 * (1) while構文の最後の行はyieldでなければならない
 * (2) do...while構文の最後の行はyieldでなければならない
 * (3) for構文の最後の行はyieldでなければならない
 * (4) for...of, for...inは任意とするのでエラーにはしない（対象外）
 * (5) Array#forEachは yieldが使えないのでエラーにはしない（対象外）
 * 
 * 【plugin】
 * (1) 【Error】xxx.Sound.～ の awaitを必要とするメソッドに awaitを強制する
 * (2) 【Error】xxx.Event.～ の awaitを必要とするメソッドに awaitを強制する
 * (3) 【Error】xxx.Extensions.～ の awaitを必要とするメソッドに awaitを強制する
 * (4) 【Error】xxx.Looks.～ の awaitを必要とするメソッドに awaitを強制する
 * (5) 【Error】xxx.Control.～ の awaitを必要とするメソッドに awaitを強制する
 * (6) 【Error】HatEventメソッドの引数とするFunctionには asyncをつける
 * 
 * ASTチェックは 次で実施している
 * https://astexplorer.net/
 */

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import {eventAsyncRulesPlugin} from "./eslintEventAsyncRulePlugin.js";
import {controlAsyncRulesPlugin} from "./eslintControlAsyncRulePlugin.js";
import {s3LoopRulesPlugin} from "./eslintLoopRulePlugin.js";
import {awaitRulesPlugin } from "./eslintAwaitRulePlugin.js";

/** @type {import('eslint').Linter.Config[]} */
const eslint_S3_config = [
    {
        ignores: ["**/*.d.ts", "lib/**/*.ts", "node_modules/**/*", "eslint-plugin/**/*.js", "./*.js"],
    },
    {
        files: ["**/*.ts","**/*.js"],
        languageOptions: { 
            globals: {
                "console": "readonly",
                ...globals.browser 
            }
        },
        plugins: {
            awaitRule: awaitRulesPlugin,
            eventAsync: eventAsyncRulesPlugin,
            controlAsync: controlAsyncRulesPlugin,
            loopCheck: s3LoopRulesPlugin,
        },
        rules: {
            "indent": ["error", 4],  // indent 4 space
            "no-this-alias": "off",
            "@typescript-eslint/no-this-alias": [
                "error",
                {
                    "allowDestructuring": false, // Disallow 'const {props,state} = this';
                    "allowedNames": ["self","me","clone"] // Allow 'const self = this;'
                }
            ],
            'no-unused-vars': [
                'warn',
                {
                    "argsIgnorePattern": "^_",
                }
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_",
                    "destructuredArrayIgnorePattern": "^_"
                }
            ],
            'awaitRule/await-plugin': 'error',
            'eventAsync/event-async-plugin': 'error',
            'controlAsync/control-async-plugin': 'error',
            'loopCheck/s3-loop-plugin' : 'error',
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "no-empty": "off",
            "require-yield": "off",
        }
    }
];
export {eslint_S3_config};
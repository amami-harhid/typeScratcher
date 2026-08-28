import { TsAstReplacer as _tsAstReplacer } from "./vite-plugin-ts-ast-replacer";
import { TsCodeReplacer as _tsCodeReplacer } from "./vite-plugin-ts-code-replacer";
import { type Plugin } from 'vite/dist/node';

export const TsAstReplacer: ()=>Plugin = _tsAstReplacer;
export const TsCodeReplacer: ()=>Plugin = _tsCodeReplacer;
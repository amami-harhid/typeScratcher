import { Typescratcher as Ts } from './build/typescratcher';
import type { ExportType } from './src/type';
import type { createSvgImageAttributes } from './src/type/image';
import type { IImage } from './src/type/image';
import type { ISprite } from './src/type/entity/sprite';
import type { IStage } from './src/type/entity/stage';
import { ScratchFontFamily as _ScratchFontFamily } from './src/type/svgText';


export const Typescratcher: ExportType = Ts;

export type Sprite = ISprite;
export type Stage = IStage;
export type Image = IImage;
export type ICreateSvgImageAttributes = createSvgImageAttributes;
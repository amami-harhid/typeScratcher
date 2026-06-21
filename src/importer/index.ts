import { Typescratcher as Ts } from '../../build/typescratcher';
import type { ExportType } from '../type';
import type { createSvgImageAttributes } from '../type/image';
import type { IImage } from '../type/image';
import type { ISprite } from '../type/entity/sprite';
import type { IStage } from '../type/entity/stage';
import { ScratchFontFamily as _ScratchFontFamily } from '../type/svgText';


export const Typescratcher: ExportType = Ts;

export type Sprite = ISprite;
export type Stage = IStage;
export type Image = IImage;
export type ICreateSvgImageAttributes = createSvgImageAttributes;
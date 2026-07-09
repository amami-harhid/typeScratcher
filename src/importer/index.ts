import { Typescratcher as Ts } from '../../build/typescratcher';
import type { ExportType } from '../type';
import type { createSvgImageAttributes } from '../type/image';
import type { IImage } from '../type/image';
import type { ISprite } from '../type/entity/sprite';
import type { IStage } from '../type/entity/stage';
import { ScratchFontFamily as _ScratchFontFamily } from '../type/svgText';

/** @hidden */
export const Typescratcher: ExportType = Ts;

/** @hidden */
export type Sprite = ISprite;
/** @hidden */
export type Stage = IStage;
/** @hidden */
export type Image = IImage;
/** @hidden */
export type ICreateSvgImageAttributes = createSvgImageAttributes;
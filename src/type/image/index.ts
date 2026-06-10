import { TextAttributes } from "../text";

/**
 * Image(イメージ)
 */
export type ImageArgStringObject = { [key:string]:string };
export interface SImage{
    /**
     * @param image {ImageArgStringObject}
     */
    new(image:ImageArgStringObject):IImage;
    /**
     * 
     * @param image
     * @param attributes 
     */
    createSvgImage(image: ImageArgStringObject, attributes: TextAttributes):Promise<IImage>;

};
export interface IImage {
    skinId: number;
    name: string;
    image: string;
    loadCompleted: boolean;
    load(): Promise<void>;
}
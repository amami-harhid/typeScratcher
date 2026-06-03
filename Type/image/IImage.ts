/**
 * Image(イメージ)
 */
export type ImageArgStringObject = { [key:string]:string };
export interface SImage{
    /**
     * @param image {ImageArgStringObject}
     */
    new(image:ImageArgStringObject):IImage;

};
export interface IImage {
    skinId: number;
    name: string;
    image: string;
    loadCompleted: boolean;
    load(): Promise<void>;
}
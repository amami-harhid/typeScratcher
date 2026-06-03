/**
 * ImageBank
 */
import { Loader } from "../loader/loader";
import type { IImage } from "@Type/image/IImage";
export class ImageBank {

    private static _images: IImage[] = [];
    private static _imageLoads: Promise<void>[] = [];

    static add(image: IImage) {
        ImageBank._images.push(image);
        const load = image.load();
        ImageBank._imageLoads.push(load);
        Loader.add(load);
    }

}
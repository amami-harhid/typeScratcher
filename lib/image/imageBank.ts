/**
 * ImageBank
 */
import { Image } from "./image";
import { Loader } from "../loader/loader";
import { Playground } from "lib/vm/playground";
export class ImageBank {

    private static _images: Image[] = [];
    private static _imageLoads: Promise<void>[] = [];

    static add(image: Image) {
        ImageBank._images.push(image);
        const load = image.load();
        ImageBank._imageLoads.push(load);
        Loader.add(load);
    }

}
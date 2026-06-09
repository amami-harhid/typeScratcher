import { engine, Engine } from "../engine";
import { ImageToBase64Util } from "../utils/base64Util";

/**
 * Image Loader
 */
export class ImageLoader {
    /**
     * REGEX_SVG_DATA_IMAGE_FILE
     * svg file 名 の判定のRegExpを返す
     * @returns {RegExp}
     */
    private static get REGEX_SVG_DATA_IMAGE_FILE(): RegExp {
        return /^.+\.svg(\\?.*)?$/;
    }
    /**
     * REGEX_DATA_IMAGE_SVG
     * svg data の先頭
     */
    static get REGEX_DATA_IMAGE_SVG (): RegExp {
        return /^data:image\/svg\+xml/;
    }


    static async loader(path: string): Promise<string> {
        if(path.match(ImageLoader.REGEX_DATA_IMAGE_SVG)||path.match(ImageLoader.REGEX_SVG_DATA_IMAGE_FILE)) {
            return ImageLoader._svgText(path);
        }else{
            return ImageLoader._bitmapLoad(path);
        }


    }

    /**
     * 与えたアドレスをもとにイメージを取り出し返す。
     * エラーが起きたときは文字列("ERROR")を返す。
     * @param path {string}  
     * @returns Promise<string>
     */
    static async _svgText(path: string) :Promise<string>{
        let svg: Response = await fetch(path);
        let _text: string = await svg.text();
        if(_text.substring(0,4) != "<svg"){
            return "ERROR";
        }
        return _text;
    }

    static async _bitmapLoad(path: string): Promise<string>{
        const render = (engine as Engine).render;
        const StageSize = {W: render.stageWidth, H: render.stageHeight};
        const imageInfo = await ImageToBase64Util.getLoadInfo(path);
        const w = imageInfo.size.width;
        const h = imageInfo.size.heigth;
        const dataUrl = imageInfo.data;
        if(w > StageSize.W && h > StageSize.H){
            const svg = ImageLoader.toSvg(dataUrl, StageSize.W, StageSize.H);
            return svg;
        }else{
            // TODO BITMAPの場合
            // サイズを半分にすると大きさが丁度よいのだが、
            // なぜ半分なのか不明。
            const svg = ImageLoader.toSvg(dataUrl,w/2,h/2);
            return svg;
        }

    }
    private static toSvg(dataUrl:string, width: number, height: number): string {
        const svg = 
`<svg width="${width}" height="${height}" viewBox="0,0,${width},${height}" xmlns="http://www.w3.org/2000/svg">
    <image href="${dataUrl}" width="${width}" height="${height}" />
</svg>`;
        return svg;
    }

}
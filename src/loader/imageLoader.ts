/**
 * Image Loader
 */

export class ImageLoader {

    /**
     * 与えたアドレスをもとにイメージを取り出し返す。
     * エラーが起きたときは文字列("ERROR")を返す。
     * @param image {string}  
     * @returns Promise<string>
     */
    static async _svgText(image: string) :Promise<string>{
        let svg: Response = await fetch(image);
        let _text: string = await svg.text();
        if(_text.substring(0,4) != "<svg"){
            return "ERROR";
        }
        return _text;
    }
}
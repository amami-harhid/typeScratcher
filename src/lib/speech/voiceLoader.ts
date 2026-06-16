/**
 * VoiceLoader
 */
export class VoiceLoader {

    /**
     * VOICEをロードする
     * @param path {string} 
     * @return data {Uint8Array<ArrayBuffer>}
     */
    static async load(path:string): Promise<Uint8Array<ArrayBuffer>>{
        let responce = await fetch(path);
        let buffer = await responce.arrayBuffer();
        let data =  new Uint8Array(buffer);
        return data;
    }

};

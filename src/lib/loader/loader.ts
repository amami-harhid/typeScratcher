/**
 * Loader
 */
export class Loader {
    
    static _loadArr : Promise<void>[] = []

    static async waitLoading() {
        return new Promise<void>( (resolve, reject)=>{
            Promise.all( Loader._loadArr).then(()=>{
                resolve();
            }).catch(()=>{
                reject();
            });
        })
    }

    static add( loader: Promise<void>) {
        Loader._loadArr.push( loader );
    }
}
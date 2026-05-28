/**
 * Loader
 */
export class Loader {
    
    static _loadArr : Promise<void>[] = []

    static async waitLoading() {
        console.log('## waitLoading start');
        return new Promise<void>( (resolve, reject)=>{
            //console.log(Loader._loadArr.length);
            Promise.all( Loader._loadArr).then(()=>{
                console.log('## waitLoading then');
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
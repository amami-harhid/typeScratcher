let queue = Promise.resolve();
const wait = (sec) => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve();
        }, sec*1000);
    })
}
const hoge = (count) => {
    queue = queue.then(()=>{
        console.log('hoge', count);
        return new Promise(async resolve=>{
            await wait(1);
            resolve();
        })
    });
    //console.log(queue);
    //return queue; 
}
const fuga = (count) => {
    queue = queue.then(()=>{
        console.log('fuga', count);
        return new Promise(async resolve=>{
            await wait(0);
            resolve();
        })
    });
    //console.log(queue);
    //return queue; 
}
const waao = (count) => {
    console.log('wao', count);
}

hoge(1);
fuga(2);
waao(3)
hoge(4);
console.log('===============');

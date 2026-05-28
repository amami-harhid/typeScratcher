import { Image } from "../lib/image/image";
import { Loader } from "../lib/loader/loader";
import { Sprite } from "../lib/entity/sprite";
import Apple from './assets/Apple.svg';
import Arrow from './assets/Arrow1-a.svg';

const apple = new Image(Apple);
const arrow = new Image(Arrow);

const cat = new Sprite('CAT');
cat.Image.add( [apple, arrow] );

Loader.waitLoading().then(()=>{
    console.log("cat loading(1) = ", cat.loadCompleteAll);
//    for(const img of cat.images) {
//        console.log(img.image);
//    }
});

Loader.waitLoading().then(()=>{
    console.log("cat loading(2) = ", cat.loadCompleteAll);
//    for(const img of cat.images) {
//        console.log(img.image);
//    }
});

cat.whenFlag(function(){
    console.log('START');
})
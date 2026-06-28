/**
 * TEST 012
 * ◇ クローンする
 */
import { Typescratcher as TS } from '../../src';
import type { Sprite, Stage } from '../../src';

import CatSvg from '../assets/cat.svg';
import AmonPng from '../assets/Amon.png';
import BlueskySvg from '../assets/Blue Sky.svg';
import BasketBallPng from '../assets/Basketball 2.png';
import CatWav from '../assets/Cat.wav';
import TennishitWav from '../assets/Tennis Hit.wav';
import SquawkWav from '../assets/Squawk.wav';

const BlueskyImage = new TS.Image({BlueskySvg});
const BasketballImage = new TS.Image({BasketBallPng});
const CatImage = new TS.Image({CatSvg});
const AmonImage = new TS.Image({AmonPng});

const CatSound = new TS.Sound({CatWav});
const TennishitSound = new TS.Sound({TennishitWav});
const SquawkSound = new TS.Sound({SquawkWav});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage, AmonImage]);
cat.Sound.add([CatSound, TennishitSound, SquawkSound]);

const stage = new TS.Stage();
stage.Backdrop.add([BlueskyImage, BasketballImage]);

const BackDropName = TS.Variable.string(BlueskyImage.name)
TS.Variable.monitoring({BackDropName});

cat.Event.flagPresser().func=async function*(this:Sprite) {
    this.Sound.setVolume(CatSound, 50);
    this.Sound.setPitch(CatSound, 120);
    this.Motion.position.xy = [0,0];
    this.Motion.direction.degree = 90;
    for(;;){
        this.Motion.direction.degree += 5;
        this.Control.clone();
        this.Sound.play(TennishitSound);
        await this.Control.wait(0.1);
        this.Looks.effect.change(TS.ImageEffective.GHOST, 5);
        this.Looks.effect.change(TS.ImageEffective.COLOR, 5);
        if(this.Looks.effect.get().ghost == 100) {
            this.Looks.effect.set(TS.ImageEffective.GHOST, 0);
            this.Sound.play(SquawkSound);
        }
        yield;
    }
}

cat.Event.cloned().func = async function*(this:Sprite) {
    this.Sound.setPitch(CatSound, 150);
    this.Sound.setVolume(CatSound, 30);
    this.Looks.size.scale = [10, 10];
    this.Looks.effect.change(TS.ImageEffective.COLOR, 25);
    for(;;) {
        this.Motion.move.steps(15);
        this.Looks.costume.next();
        this.Looks.size.w += 2;
        this.Looks.size.h += 2;

        if(this.Sensing.edge.isTouching === true) {
            this.Sound.play(CatSound);
            break;
        }
        await this.Control.wait(0.05);
        yield;
    }
    this.Looks.hide();
    await this.Control.wait(1);
    this.Control.removeClone();
}


stage.Event.flagPresser().func=async function*(this: Stage) {
    for(;;){
        this.Looks.backdrop.next();
        BackDropName.text = this.Looks.backdrop.name;
        await this.Control.wait(1);
        yield;
    }
}

TS.engine.start();

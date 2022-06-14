import * as PIXI from 'pixi.js';
import Settings from './settings/Settings';

class Game extends PIXI.Container {
  constructor() {
    super();

    this.interactive = true;
    this.interactiveChildren = true;

    const textureCommon = PIXI.Texture.from('cover.png');
    const textureHover = PIXI.Texture.from('hover.png');

    for (let i = 0; i < Settings.GRID_WIDTH; i++) {
      for (let j = 0; j < Settings.GRID_HEIGHT; j++) {
        const sprite = this.createSprite(i, j, textureCommon, textureHover);
        this.addChild(sprite);
      }
    }
  }  

  createSprite(i, j, textureCommon, textureHover) {
    const sprite = new PIXI.Sprite(textureCommon);
    sprite.x = i * Settings.ITEM_SIZE;
    sprite.y = j * Settings.ITEM_SIZE;
    sprite.interactive = true;

    sprite.on('click', () => {
      if (sprite.texture === textureCommon) {
        sprite.texture = textureHover;
      } else {
        sprite.texture = textureCommon;
      }
    });
    return sprite;    
  }
}

export default Game;

// Сітка 4х4 але як впровадити не знаю

// let result = '';
// const length = 4; 
// const weght = 4;
// for (let i = 1; i <= length; i++){
//   for (let j = 1; j<= weght; j++){
//     result += "*";
//   }
//   result += "\n";
// }
// console.log (result);
import * as PIXI from 'pixi.js';
import Settings from './settings/Settings';

class Game extends PIXI.Container {
  constructor() {
    super();

    console.log("::: Version 4");

    this.interactive = true;
    this.interactiveChildren = true;

    const itemsPath = ['gem_0.png', 'gem_1.png', 'gem_2.png', 'gem_3.png', 'gem_4.png', 'gem_5.png', 'gem_6.png'];
    const itemsTextures = itemsPath.map(path => PIXI.Texture.from(path));

    const textureCommon = PIXI.Texture.from('cover.png');

    for (let i = 0; i < Settings.GRID_WIDTH; i++) {
      for (let j = 0; j < Settings.GRID_HEIGHT; j++) {
        const sprite = this.createSprite(textureCommon, itemsTextures);
        sprite.x = i * Settings.ITEM_SIZE;
        sprite.y = j * Settings.ITEM_SIZE;
        this.addChild(sprite);
      }
    }
  }

  createSprite(commonTexture, itemsTextures) {
    const sprite = new PIXI.Sprite(commonTexture);
    sprite.interactive = true;
    sprite.on('click', () => {
      if (sprite.texture !== commonTexture) {
        sprite.texture = commonTexture

        sprite.filters = null;
      } else {
        sprite.texture = itemsTextures[Math.floor(Math.random() * 6)];
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


/*
    // The same both
    for (let path in itemsPath) {
      console.log(`name: ${path}`)
    }

    itemsPath.forEach(path => console.log(`name: ${path}`));

    // The short example
    const a = [1,2,3,4];
    const b = a.map(num => num * 2); // b [2,4,6,8]

*/

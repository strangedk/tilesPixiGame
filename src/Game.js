import * as PIXI from 'pixi.js';
import Settings from './settings/Settings';

class Game extends PIXI.Container {
  constructor() {    
    super();

    console.log("::: Version 3");

    this.interactive = true;
    this.interactiveChildren = true;

    const itemsPath = ['gem_64.png', 'gem_64.png', 'gem_64.png', 'gem_64.png', ];
    const itemsTextures = itemsPath.map(path => PIXI.Texture.from(path));

    const textureCommon = PIXI.Texture.from('cover.png'),
          textureHover = PIXI.Texture.from('hover.png')

    for (let i = 0; i < Settings.GRID_WIDTH; i++) {
      for (let j = 0; j < Settings.GRID_HEIGHT; j++) {
        const sprite = this.createSprite(textureCommon, textureHover, textureGem);
        sprite.x = i * Settings.ITEM_SIZE;
        sprite.y = j * Settings.ITEM_SIZE;
        this.addChild(sprite);
      }
    }
  }

  createSprite(textureCommon, textureHover, textureGem) {
    const sprite = new PIXI.Sprite(textureCommon);
    sprite.interactive = true;
    
    sprite.on('click', () => {
      if (sprite.texture !== textureCommon) {
        sprite.texture = textureCommon;
        sprite.filters = null;
      } else {
        const newTexture = (Math.random() > 0.5) ? textureHover : textureGem;
        sprite.texture = newTexture;

        if (sprite.texture === textureGem) {
          const colorMatrix = new PIXI.filters.ColorMatrixFilter();
          sprite.filters = [colorMatrix];
          colorMatrix.hue(Math.random() * 360, false);      
        }
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
import * as PIXI from 'pixi.js';

class Game extends PIXI.Container {
  constructor() {
    super();

    const texture = PIXI.Texture.from('cover.png');

    const sprite = new PIXI.Sprite(texture);
    
    this.addChild(sprite);
    

    const sprite2 = new PIXI.Sprite(texture);
    sprite2.x = 64;
    sprite2.y = 64;
    this.addChild(sprite2);

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
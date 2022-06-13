import * as PIXI from 'pixi.js';

class Game extends PIXI.Container {
  constructor() {
    super();

    // GOOGLE: 
    const texture = PIXI.Texture.from('cover.png');
    const sprite = new PIXI.Sprite(texture);

    this.addChild(sprite);


  }
}

export default Game;

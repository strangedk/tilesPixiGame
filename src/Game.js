import * as PIXI from 'pixi.js';

class Game extends PIXI.Container {
  constructor() {
    super();

    const sprite = new PIXI.Sprite(PIXI.Texture.from('https://image.shutterstock.com/image-vector/metallic-monogram-letter-c-s-600w-236519857.jpg'))
    this.addChild(sprite);
  }
}

export default Game;

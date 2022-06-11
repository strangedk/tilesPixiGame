import * as PIXI from 'pixi.js'
import Settings from "./src/settings/Settings";
import Game from "./src/Game";

class Main extends PIXI.Container {
  constructor() {
    super();

    const options = {
      width: Settings.WIDTH,
      height: Settings.HEIGHT,
      antialias: true,
      transparent: true,
    };

    const app = new PIXI.Application(options);
    const game = new Game();
    app.stage.addChild(game);

    document.body.appendChild(app.view);
  }
}

const main = new Main();

import * as PIXI from 'pixi.js';
import Game from "./Game";

const options = {
  width: 800,
  height: 600,
  antialias: true,
  transparent: true,
};

const app = new PIXI.Application(options);

const init = () => {
  const game = new Game(app);
  app.stage.addChild(game);
}

init();

document.body.appendChild(app.view);

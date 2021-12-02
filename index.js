import Phaser from 'phaser';

class Main extends Phaser.Scene {
  constructor() {
    super();

    this.imgs = [];
  }

  preload() {
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create() {
    this.wrapper = this.add.container(0,0);
    const sky1 = this.add.image(400, 400, 'sky');
    const sky2 = this.add.image(800, 400, 'sky');
    this.wrapper.add(sky1);
    this.wrapper.add(sky2);
    this.imgs = new Array(300).fill(0).map(v => this.createSnowflake());
  }

  update = () => {
    if (!this.delta) {
      this.delta = 1;
      this.weather = 1-Math.random();
    }

    if (this.delta++ > 130) {
      this.weather = 1-Math.random();
    }

    this.wrapper.x -= 1;

    if (this.wrapper.x < -400) {
      this.wrapper.x = 0;
    }

    this.imgs.forEach(img => {
      img.y += img.scale * (30 + this.weather*-1 * 5);
      img.x -= img.scale * (30 + this.weather * 40);

      if (img.y > this.game.config.height || img.x < 0) {
        const {x,y} = this.newPosition();
        img.x = x;
        img.y = y;
      }
    })
  }

  createSnowflake = () => {
    const {x,y} = this.newPosition();
    const img = this.add.image(x,y,'red');
    img.scale = Math.random() / 4;
    img.setTintFill(0xffffff);
    return img;
  }

  newPosition = () => {
    const {width, height} = this.game.config;
    const x = Math.floor(Math.random() * width * 3);
    const y = -height + Math.floor(Math.random() * height);
    return {x,y};
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: [ Main ],
};

const game = new Phaser.Game(config);
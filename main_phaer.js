import * as PIXI from './node_modules/pixi.js/dist/pixi.mjs'

class MyScene extends Phaser.Scene {
	constructor() {
		super();
	}
	preload() {
		this.load.bitmapFont()
	}
	create() {
		

	}

}
var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: '#000000',
	scene: MyScene
};
var game = new Phaser.Game(config);
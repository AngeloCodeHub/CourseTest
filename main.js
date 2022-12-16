
import { test } from "./main_1.js";

class MyScene extends Phaser.Scene {
	constructor() {
		super();
		this.aa = new test()
	}
	preload() {
		this.aa.preload(this)
		
		// this.load.image("test","bw-face.png")
	}
	create() {
		this.add.image(400,300,"test")

	}
	update() {

	}
}
var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: '#000000',
	parent: 'phaser-example',
	scene: MyScene
};
var game = new Phaser.Game(config);


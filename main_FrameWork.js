

import * as PIXI from './node_modules/pixi.js/dist/pixi.mjs'

class MyScene extends Phaser.Scene {
	constructor() {
		super();
	}
	preload() {
		this.load.image('block', 'assets/Phaser/sprites/50x50.png');
	}
	create() {

		// this.add.image(400,300,'block');
		let blocks = this.add.group({ key: 'block', repeat: 107, setScale: { x: 0.3, y: 0.3 } })

		Phaser.Actions.GridAlign(blocks.getChildren(), {
			width: 12,
			height: 10,
			cellWidth: 60,
			cellHeight: 60,
			x: 20,
			y: 30
		})

		let i =0;
		blocks.children.iterate((child)=>{
			this.tweens.add({
				targets:child,
				scaleX:1,
				scaleY:1,
				ease:'Sine.easeInOut',
				duration: 300,
				delay: i * 50,
				repeat: -1,
				yoyo: true
			});
			i++;
			if (i%9===0) {
				i=0
			}
		})
		// let AAA=blocks.getFirst(true)
		// console.log(AAA);
		// AAA.x=400;AAA.y=300


	}
}
var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: '#2d2d2d',
	scene: MyScene
};
var game = new Phaser.Game(config);



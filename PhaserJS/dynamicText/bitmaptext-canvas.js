
let value = 0;

class MyScene extends Phaser.Scene {
	constructor() {
		super();
	}
	preload() {
		this.load.bitmapFont('desyrel', 'assets/phaser/fonts/bitmap/desyrel.png', 'assets/phaser/fonts/bitmap/desyrel.xml');
		this.load.bitmapFont('desyrelPink', 'assets/phaser/fonts/bitmap/desyrel-pink.png', 'assets/phaser/fonts/bitmap/desyrel-pink.xml');
	}
	create() {
		this.dynamic1 = this.add.bitmapText(0, 0, 'desyrel', "Hello World", 8)

		this.tweens.add({
			targets: this.dynamic1,
			duration: 2000,
			fontSize: 128,
			ease: 'Sine.easeInOut',
			repeat: -1,
			yoyo: true
		});
		this.dynamic2 = this.add.bitmapText(0, 200, 'desyrelPink', 'hello world', 32);

		this.tweens.add({
			targets: this.dynamic2,
			duration: 2000,
			scaleX: 6,
			scaleY: 4,
			ease: 'Sine.easeInOut',
			repeat: -1,
			yoyo: true
		});
	}
	update() {
		this.dynamic1.text = "Value: " + value.toFixed(2);
		value+=0.01
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

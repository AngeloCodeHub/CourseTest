/**
 * 像素遮罩
 * 
 * 幾何遮罩
 */

class MyScene extends Phaser.Scene {
	constructor() {
		super();
	}
	preload() {
		this.load.image('bunny', 'assets/phaser/sprites/bunny.png');
		this.load.image('backdrop', 'assets/phaser/pics/platformer-backdrop.png');
		this.load.image('mask', 'assets/phaser/pics/mask.png');
	}
	create() {

		// Phaser . GameObjects . GameObjectCreator
		const backdrop = this.make.image({
			x: game.config.width / 2,
			y: game.config.height / 2,
			key: "backdrop",
			add: true
		}).setScale(2)
		// Phaser . GameObjects . GameObjectFactory
		const mask = this.add.image(game.config.width / 2, game.config.height / 2, "mask")

		const bunny = this.add.image(640 / 2, 480 / 2, "bunny")

		// Phaser . Display . Masks . BitmapMask
		// Phaser . Display . Masks . GeometryMask
		console.log(bunny.mask);	//null

		bunny.mask = new Phaser.Display.Masks.BitmapMask(this, mask)

		console.log(bunny.mask);

		// Phaser . Input . InputPlugin
		// Phaser . Input . Pointer
		// Event: GAMEOBJECT_POINTER_MOVE
		this.input.on("pointermove", (pointer) => {
			mask.x = pointer.x;
			mask.y = pointer.y;
		})

	}
	update() {

	}
}
var config = {
	type: Phaser.AUTO,
	// type: Phaser.CANVAS,
	width: 640,
	height: 480,
	backgroundColor: '#000000',
	parent: 'phaser-example',
	scene: MyScene
};
var game = new Phaser.Game(config);


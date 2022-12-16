
export class test {
	constructor() {

	}

	preload(scene) {
		scene.load.path = "./assets/phaser/pics/"
		scene.load.image("test", "bw-face.png")

		foreign()


	}

	
}

function foreign() {
	console.log("這是外部函式");
}
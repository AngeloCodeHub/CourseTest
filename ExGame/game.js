
export default class maingame extends Phaser.Scene {
	constructor() {
		super("maingame");

		this.player;
		this.germs;
		this.pickups;

		this.introText;
		this.scoreText;
		this.score = 0;
		this.hightscore=0;
		this.newHighscore=false;

	}


	create() {
		console.log("主遊戲~~~");
	}
}


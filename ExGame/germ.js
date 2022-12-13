
export default class germ extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, animation, speed) {
		super(scene, x, y, "assets");

		this.play(animation)

		this.setScale(Phaser.Math.FloatBetween(1, 2));

		this.speed = speed
		this.alpha = 0;
		this.lifespan = 0;
		this.isChasing = false

		// this.target = new Phaser.Math.Vector2();
	}

	start(chaseDelay) {
		this.setCircle(14, 6, 2);
		if (!chaseDelay) {
			chaseDelay = Phaser.Math.RND.between(3000, 8000);
			this.scene.sound.play('appear');
		}
		this.scene.tweens.add({
			targets: this,
			alpha: 1,
			duration: 2000,
			ease: "Linear",
			hold: chaseDelay,
			onComplete: () => {
				if (this.scene.player.isAlive) {
					this.lifespan = Phaser.Math.RND.between(6000, 12000);
					this.isChasing = true;
				}
			}
		})
		return this;
	}

	restart(x, y) {
		this.body.reset(x, y);

		this.setActive(true);
		this.setVisible(true);
		this.setAlpha(0);

		return this.start()
	}

	// 改寫父類別
	preUpdate(time, delta) {
		super.preUpdate(time, delta);
		if (this.isChasing) {
			this.lifespan-=delta;


		} else {
			// 
			this.scene.getPlayer(this.target);

		}
	}

}


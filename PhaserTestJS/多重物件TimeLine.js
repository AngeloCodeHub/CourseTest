/**
 * tween timeline可用在不同gameobject
 */
 var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: { preload: preload, create: create }
};
var game = new Phaser.Game(config);
function preload() {
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('arrow', 'assets/sprites/arrow.png');

}
function create() {
    var marker = this.add.image(100, 100, 'block').setAlpha(0.3);
    var image = this.add.image(100, 100, 'block');
    let image1 = this.add.image(600, 100, 'arrow');

    var timeline = this.tweens.createTimeline();
    timeline.add({ targets: image, x: 600, ease: 'Power1', duration: 3000 });
    timeline.add({ targets: image, y: 500, ease: 'Power1', duration: 3000 });
    timeline.add({ targets: image1, y: 500, ease: 'Power1', duration: 3000 });
    timeline.add({ targets: image, x: 100, ease: 'Power1', duration: 3000 });
    timeline.add({ targets: image, y: 100, ease: 'Power1', duration: 3000 });
    timeline.play();
    console.log(timeline);
}

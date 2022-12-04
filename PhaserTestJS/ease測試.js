
var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: { preload: preload, create: create, update: update }
};
var game = new Phaser.Game(config);

let aTween
function preload() {
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('arrow', 'assets/sprites/arrow.png');
}
function create() {
    // var marker = this.add.image(100, 300, 'block').setAlpha(0.3);
    var image = this.add.image(100, 200, 'block');
    var image2 = this.add.image(100, 400, 'block');
    var image3 = this.add.image(100, 200, 'arrow');

    aTween = this.tweens.add({
        targets: image,
        x: 600,
        duration: 2000,
        // rotation:10,
        angle: 98,
        ease: 'Back',
        easeParams: [3.5],
        delay: 1000
    });
    // aTween.targets = [image3];
    this.tweens.add({
        targets: image2,
        x: 600,
        duration: 2000,
        // ease: 'Power0',
        ease: 'Linear.In',
        // easeParams: [3.5],
        delay: 1000
    });
}

function update() {
    // if (aTween.progress<1) {
    //     console.log(aTween.progress)
    // }
}

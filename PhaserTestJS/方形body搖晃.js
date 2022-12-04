/**
 * 
 */
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: { default: 'matter', matter: { debug: true } },
    scene: { preload: preload, create: create }
};
var game = new Phaser.Game(config);
function preload() {
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('platform', 'assets/sprites/platform.png');
}
function create() {
    let matterBody = this.matter.add.image(400, 200, 'block');
    matterBody.setScale(1.5)
    // 摩擦力設0，否則會移位
    matterBody.setFriction(0)
    this.time.delayedCall(1500, () => {
        matterBody.angle = 30
        this.time.delayedCall(1500, () => {
            matterBody.angle = -30
            console.log(matterBody.x)
            this.time.delayedCall(1500, () => {
                console.log(matterBody.x)
            }, this)
        }, this)
    }, this)
    // matterBody.setRotation(0.3)
    this.matter.add.image(400, 550, 'platform', null, { isStatic: true });
}

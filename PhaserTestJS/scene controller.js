/**
 * GitHub origin
 * https://github.com/AngeloCodeHub/Phaser3Example/blob/master/src/scenes/tutorial/scene%20controller.js
 * http://phaserex.angcode.me:85/view.html?src=src\scenes\tutorial\scene%20controller.js&rnd=0.30576456743310687
 * 
 * javascript類別可用此方法存取
 * this['button' + 1] 等於 this.button1
 * 
 * Phasr中的事件處理函式如
 * https://newdocs.phaser.io/docs/3.55.2/Phaser.GameObjects.Image#on
 * 參數如有this，則this是指向最上層物件
 * 
 * 看sourcecode的指派要注意是框架本身函式還是自定義，不要一股腦去找框架定義
 */
/** API DOC
 * https://newdocs.phaser.io/docs/3.55.2/Phaser.Scene#update
 * https://newdocs.phaser.io/docs/3.55.2/Phaser.GameObjects.Image#setFrame
 * 改變altas的Frame
 * 
 * https://newdocs.phaser.io/docs/3.55.2/Phaser.Textures.TextureManager#addSpriteSheetFromAtlas
 */
class Controller extends Phaser.Scene {
    constructor() {
        // 測試繼承本身class名稱
        super('Controller');
        this.active;
        this.currentScene;

        this.button1; this.button2; this.button3; this.button4; this.button5; this.button6;
        this.text1; this.text2;
        this.toggle1; this.toggle2;

        this.bg;

    }
    preload() {
        this.load.image('bg', 'assets/tests/scenes/bg.jpg');
        this.load.atlas('space', 'assets/tests/scenes/space.png', 'assets/tests/scenes/space.json');
        this.load.atlas('ui', 'assets/tests/scenes/ui.png', 'assets/tests/scenes/ui.json');
        this.load.bitmapFont('digital', 'assets/tests/scenes/digital.png', 'assets/tests/scenes/digital.xml');

    };
    create() {
        this.textures.addSpriteSheetFromAtlas('mine', { atlas: 'space', frame: 'mine', frameWidth: 64 });
        this.textures.addSpriteSheetFromAtlas('asteroid', { atlas: 'space', frame: 'asteroid', frameWidth: 96 });

        this.anims.create({ key: 'asteroid', frames: this.anims.generateFrameNumbers('asteroid', { start: 0, end: 24 }), frameRate: 12, repeat: -1 });
        // this.add.image(0, 0, 'ui', 'panel').setOrigin(0);

        this.createButton(1, 'SceneA', 'nebula', 36, 26);
        this.createButton(2, 'SceneB', 'sun', 157, 26);
        this.createButton(3, 'SceneC', 'asteroids', 278, 26);
        this.createButton(4, 'SceneD', 'planet', 36, 76);
        this.createButton(5, 'SceneE', 'ship', 157, 76);
        this.createButton(6, 'SceneF', 'mines', 278, 76);

        this.button1.setFrame('button-down');
        this.button1.setData('active', true);
        this.active = this.button1;
        // console.log(this.active)

        this.bg = this.add.tileSprite(0, 135, 1024, 465, 'bg').setOrigin(0);


    }
    update(time, delta) {
        this.bg.tilePositionX += 0.02 * delta;
        this.bg.tilePositionY += 0.005 * delta;
    };
    createButton(id, scene, name, x, y) {
        let btn = this.add.image(x, y, 'ui', 'button-out').setOrigin(0);
        btn.setInteractive();
        btn.setData('id', id); btn.setData('scene', scene); btn.setData('name', name); btn.setData('active', false);

        btn.on('pointerover', function () {
            if (!this.getData('active')) {
                this.setFrame('button-over');
            };
        });
        btn.on('pointerout', function () {
            if (this.getData('active')) {
                this.setFrame('button-down');
            } else {
                this.setFrame('button-out');
            };
        });
        btn.on('pointerup', function () {
            if (!btn.getData('active')) {
                // 自定義函式
                // this.setActiveScene(btn);
            }
        }, this);
        this['button' + id] = btn;
    };
    setActiveScene(btn) {
        //  De-activate the old one
        this.active.setData('active', true);
        this.active.setFrame('button-out');

        btn.setData('active', true);
        btn.setFrame('button-down');
        this.active = btn;
        this.currentScene
    };

};
let config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#000000',
    // scene: [ Controller, SceneA, SceneB, SceneC, SceneD, SceneE, SceneF ]
    scene: [Controller]
};

let game = new Phaser.Game(config);

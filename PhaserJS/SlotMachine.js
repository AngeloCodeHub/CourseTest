
class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'MainScene'
    })
  }
  create() {

    // this will simply generate some colored rectangles
    let rect = this.add.graphics()
    rect.fillRectShape(new Phaser.Geom.Rectangle(0, 0, 100, 100))
    rect.fillStyle(0xff0000)
    rect.fillRect(0, 0, 100, 100)
    rect.generateTexture('img1', 100, 100)
    rect.fillStyle(0x00ff00)
    rect.fillRect(0, 0, 100, 100)
    rect.generateTexture('img2', 100, 100)
    rect.fillStyle(0x0000ff)
    rect.fillRect(0, 0, 100, 100)
    rect.generateTexture('img3', 100, 100)
    rect.fillStyle(0xffff00)
    rect.fillRect(0, 0, 100, 100)
    rect.generateTexture('img4', 100, 100)
    rect.destroy()

    const images = ['img1', 'img2', 'img3', 'img4']

    this.group = this.add.group().addMultiple(
      images.map((texture, index) => {
        return this.add.sprite(150, 100 * index, texture)
      })
    )

    // the top and bottom black rects
    let cover = this.add.graphics()
    cover.fillStyle(0x000000)
    cover.fillRect(0, 0, 400, 100)
    cover.fillRect(0, 200, 400, 400)
  }

  update() {
    this.group.children.each(child => {
      child.y += 5
      if (child.y >= 400) child.y -= 4 * 100
    })
  }
}


var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 300,
  height: 300,
  scene: MainScene
};

var game = new Phaser.Game(config);



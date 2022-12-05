import * as PIXI from './node_modules/pixi.js/dist/pixi.mjs'

const app = new PIXI.Application({ background: '#1099bb' });
document.body.appendChild(app.view);

PIXI.Assets.load([
	'./assets/Pixi/eggHead.png',
	'./assets/Pixi/flowerTop.png',
	'./assets/Pixi/helmlok.png',
	'./assets/Pixi/skully.png',
]).then(onAssetsLoaded);

const REEL_WIDTH = 160;
const SYMBOL_SIZE = 150;

// onAssetsLoaded handler builds the example.
function onAssetsLoaded() {
	// Create different slot symbols.
	const slotTextures = [
		PIXI.Texture.from('./assets/Pixi/eggHead.png'),
		PIXI.Texture.from('./assets/Pixi/flowerTop.png'),
		PIXI.Texture.from('./assets/Pixi/helmlok.png'),
		PIXI.Texture.from('./assets/Pixi/skully.png'),
	];
	const reels = [];
	const reelContainer = new PIXI.Container();
	for (let i = 0; i < 5; i++) {
		const rc = new PIXI.Container();
		rc.x = i * REEL_WIDTH;
		reelContainer.addChild(rc)

		const reel = {
			container: rc,
			symbols: [],
			position: 0,
			previousPosition: 0,
			blur: new PIXI.filters.BlurFilter(),
		};
		reel.blur.blurX = 0;
        reel.blur.blurY = 0;
        rc.filters = [reel.blur];

		for (let j = 0; j < 4; j++) {
            const symbol = new PIXI.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);
            symbol.y = j * SYMBOL_SIZE;
            symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
			symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
            reel.symbols.push(symbol);
            rc.addChild(symbol);

		}
        reels.push(reel);
	}
    app.stage.addChild(reelContainer);

}



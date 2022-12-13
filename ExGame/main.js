
/**
 * 
 * import有以下要注意（大小寫）
 * import檔名、class名稱、scene super的key（區分大小寫）
 */


import boot from "./boot.js";
import preloader from "./Preloader.js";
import MainMenu from "./mainMenu.js";
import maingame from "./game.js";

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: '#000000',
	parent: 'phaser-example',
	scene: [boot, preloader, MainMenu,maingame],
	physics: {
		default: 'arcade',
		arcade: { debug: false }
	}
};

let game = new Phaser.Game(config);

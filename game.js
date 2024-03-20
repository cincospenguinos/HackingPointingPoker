if (!window.gameAndreMade) {
	window.gameAndreMade = new Phaser.Game({
		type: Phaser.AUTO,
		width: 400,
		height: 400,
		scene: {
			preload: () => {},
			create: () => {},
			update: () => {},
		},
		physics: {},
	});
}

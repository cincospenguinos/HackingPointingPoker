// add-my-content-to-pointing-poker.js
//
// Copypasta this into your pointing poker, encapsulated with <script></script>.
// Better yet, minify this and then do that.
const scriptsToLoad = [
	'https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser-arcade-physics.min.js',
	'https://raw.githubusercontent.com/cincospenguinos/HackingPointingPoker/main/game.js',
];

function loadAScript(index) {
	const scriptUrl = scriptsToLoad[index];
	if (!scriptUrl) {
		return;
	}

	fetch(scriptUrl)
		.then(r => r.text())
		.then((arbitraryJs) => {
			const scriptTag = document.createElement('script');
			scriptTag.innerHTML = arbitraryJs;
			document.head.appendChild(scriptTag);
		}).then(() => loadAScript(index + 1));
}

loadAScript(0);

const template = `<div class="cell">
<div class="radio w-100 h-100">
	<input id="$2" name="capeRadioSelect" type="radio" class="btn-radio">
	<label for="$3" class="radio-selection">
		<div class="mb-3">
			<div class="d-inline-block">$0</div>
		</div>
		<div class="text-truncate">
			<span class="radio-icon"></span>
			<span class="radio-label">$1</span>
		</div>
	</label>
</div></div>`,
	capes = [
		['No cape', 'No cape'],
		['15 Year Anniversary'],
		['cheapsh0t', 'Translator'],
		['Cherry Blossom'],
		['Cobalt'],
		['dannyBstyle'],
		['JulianClark'],
		['MapMaker'],
		['Migrator'],
		['MillionthSale'],
		['Minecon2011'],
		['Minecon2012'],
		['Minecon2013'],
		['Minecon2015'],
		['Minecon2016'],
		['Moderator'],
		['Mojang'],
		['MojangStudios'],
		['Mojang-old'],
		['MrMessiah'],
		['Prismarine'],
		['ScrollsChamp'],
		['Translator'],
		['Translator-Chinese', 'Translator'],
		['Turtle'],
		['Valentine'],
		['Vanilla']
	],
	img = `<div class="position-relative" style="height: 128px; width: 80px;">
		<img src="$4" alt="Cape image">
	</div>`,
	can = '<canvas width="80" height="128" data-image="$5"></canvas>';

function setImg(c) {
	const ctx = c.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	const capeimg = document.createElement('img');
	capeimg.src = 'img/' + c.dataset.image + '.png';
	capeimg.addEventListener('load', function() {
		ctx.drawImage(capeimg, 1, 1, 10, 16, 0, 0, 80, 128);
	});
}

window.addEventListener('load', function() {
	const row = document.getElementById('row');
	capes.forEach((cape, i) => {
			name = cape[0],
			image = cape[1] || name;
		row.innerHTML += template.replace('$0', (i==0 ? img : can)).replace('$1', name).replace('$2', i).replace('$3', i).replace('$4', 'img/' + image + '.png').replace('$5', image);
	});
	document.getElementById('0').checked = true;
	var c = document.getElementsByTagName('canvas');
	for (canvas of c) {
		setImg(canvas);
	}
	this.window.setTimeout(() => {
		html2canvas(document.getElementById("main")).then((canvas) => {
			var link = document.createElement('a');
  			link.download = "MinecraftCapesSelection.png";
  			link.href = canvas.toDataURL("image/png");
  			link.click();
		});
	}, 5000);
}, false);







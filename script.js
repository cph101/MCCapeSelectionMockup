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
		'No cape',
		'15th Anniversary',
		'Birthday',
		'cheapsh0t',
		'Cherry Blossom',
		'Cobalt',
		'dannyBstyle',
		'Follower\'s',
		'JulianClark',
		'MapMaker',
		'MCC 15th Year',
		'Migrator',
		'MillionthSale',
		'Minecon2011',
		'Minecon2012',
		'Minecon2013',
		'Minecon2015',
		'Minecon2016',
		'Minecraft Experience',
		'Moderator',
		'Mojang Office',
		'Mojang',
		'Mojang-new',
		'Mojang-old',
		'MrMessiah',
		'Prismarine',
		'Purple Heart',
		'ScrollsChamp',
		'Translator',
		'Translator-Chinese',
		'Turtle',
		'Valentine',
		'Vanilla'
	],
	img = `<div class="position-relative" style="height: 128px; width: 80px;">
		<img src="$4" alt="Cape image">
	</div>`,
	can = '<canvas width="80" height="128" data-image="$4"></canvas>';

function setImg(c) {
	const ctx = c.getContext('2d');
	ctx.imageSmoothingEnabled = false;
	const capeimg = new Image(80, 128);
	capeimg.src = c.dataset.image;
	capeimg.onload = () => {
		ctx.drawImage(capeimg, 1, 1, 10, 16, 0, 0, 80, 128);
	};
}

window.addEventListener('load', function() {
	const row = document.getElementById('row');
	capes.forEach((cape, i) => {
		row.innerHTML += template.replace('$0', (i==0 ? img : can)).replace('$1', cape).replace('$2', i).replace('$3', i).replace('$4', 'img/' + cape + '.png');
	});
	document.getElementById('0').checked = true;
	var c = document.getElementsByTagName('canvas');
	for (var canvas of c) {
		setImg(canvas);
	}
	this.window.setTimeout(() => {
		html2canvas(document.getElementById('main')).then((canvas) => {
			var link = document.createElement('a');
  			link.download = 'MinecraftCapesSelection.png';
  			link.href = canvas.toDataURL('image/png');
  			link.click();
		});
	}, 5000);
}, false);







var Tween = {};

var a = [];

for (var k in Easing) {
	var o1 = Easing[k];

	for (var k2 in o1) {
		a.push('\n' + k + k2 + ': ' + Easing[k][k2])
	}
}

console.log(a.join(','));

var o = presets.options;

var eas = {};

[].slice.call(o).forEach(function(a) {
	eas[a.textContent] = a.value	
})

JSON.stringify(eas, null, '\t')

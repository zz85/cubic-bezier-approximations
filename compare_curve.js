var eases = require('./easing');

var Tween = eases.Tween;
var UnitBezier = eases.UnitBezier;

var x1, y1, x2, y2;

var units = 25; // 10
var compares = 0;

var values = new Array(units);

var duration = 20000;
var epsilon = (1000 / 60 / duration) / 4;


var i;
for(i = 0; i < units; i++) {
	values[i] = Tween.QuadraticOut(i / units);
}

console.time('compute');

var leastSquares = Infinity;
var fit;

for (x1=0; x1<units; x1++) {
	for (y1=0; y1<=units; y1++) {
		for (x2=units; x2>=0; x2--) {
			for (y2=units; y2>=0; y2--) {
					compare(x1 / units, y1 / units, x2 / units, y2 / units);
			}
		}
	}
}

function compare(x1, y1, x2, y2) {
	var bezier = new UnitBezier(x1, y1, x2, y2);
	var k, val, diff;
	var sumSqared = 0;

	for(i = 0; i < units; i++) {
		k = i / units;
		val = bezier.solve(k, epsilon);

		diff = values[i] - val;
		sumSqared += Math.abs(diff);
		// sumSqared += diff * diff;

	}

	if (sumSqared < leastSquares) {
		fit = [x1, y1, x2, y2];
		leastSquares = sumSqared;
	}

	compares++;

	if (compares % 100000 === 0) {
		console.log('at', x1, y1, x2, y2, 'fit', fit, leastSquares);
	}
}

console.timeEnd('compute');

console.log('compares', compares);

console.log('CONGRATS DONE!', 'fit', fit, 'leastSquares', leastSquares)
var eases = require('./easing');

var Tween = eases.Tween;
var UnitBezier = eases.UnitBezier;
var Names = eases.Names;

var x1, y1, x2, y2;

var units = 50; // 10
var compares = 0;

var duration = 20000;
var epsilon = (1000 / 60 / duration) / 4;
epsilon = 1e-5;

var i;

var easeTypes = [];
console.log('Bruteforcing parameters... Using ' + units + ' units' );
console.time('compute');

for (var name in Names) {
	easeTypes.push(new Type(name + 'In', Names[name] + 'In'));
	easeTypes.push(new Type(name + 'Out', Names[name] + 'Out'));
	easeTypes.push(new Type(name + 'InOut', Names[name] + 'InOut'));
}

function Type(name, type) {
	this.name = name;
	this.type = type;
	var values = new Array(units);
	this.leastSquares = Infinity;
	this.bestFit = null;

	var i;
	for(i = 0; i < units; i++) {
		values[i] = Tween[type](i / units);
	}

	this.values = values;
}


Type.prototype.compare = function(data, x1, y1, x2, y2) {
	var i, diff;
	var values = this.values;
	var squaredSum = 0;

	for(i = 0; i < units; i++) {
		diff = values[i] - data[i];
		squaredSum += diff * diff;
		// squaredSum += Math.abs(diff);
	}

	if (squaredSum < this.leastSquares) {
		this.bestFit = [x1, y1, x2, y2];
		this.leastSquares = squaredSum;
	}
};

var solved = new Array(units);

/*
// Unclipped version
for (x1=0; x1<units; x1++) {
	for (y1=-units; y1<=units * 2; y1++) {
		for (x2=units; x2>=0; x2--) {
			for (y2=units * 2; y2>=-units; y2--) {
				compare(x1 / units, y1 / units, x2 / units, y2 / units);
			}
		}
	}
}
/**/

/**/
// Clipped version (values between 0..1)
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

	for(i = 0; i < units; i++) {
		k = i / units;
		val = bezier.solve(k, epsilon);

		solved[i] = val;
	}

	for (i=0, il = easeTypes.length; i<il;i++) {
		var e = easeTypes[i];
		e.compare(solved, x1, y1, x2, y2);
	}

	compares++;

	if (compares % 100000 === 0) {
		console.log('at', x1, y1, x2, y2);
	}
}

function printResults() {
	for (i=0, il = easeTypes.length; i<il;i++) {
		var e = easeTypes[i];
		console.log(e.name + ':', e.bestFit, ', // ' + e.leastSquares);
	}
}

console.timeEnd('compute');

console.log('Number of permutations:', compares);

console.log('CONGRATS DONE!');

printResults();
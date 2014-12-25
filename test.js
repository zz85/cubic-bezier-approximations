var reg = /(InOut|In|Out)(.*)/;

var k2;

var ma = {};
var mm = '';
for (k in matthewlein) {
	// matthewlein[k].split(', ')
	k2 = k;
	var execs = reg.exec(k)
	if (execs) {
		// console.log(execs[2])
		k2 = execs[2] + execs[1];
	}

	mm += k2 + ': [' + matthewlein[k] + '],\n';
	
}

console.log(mm);
// Cubic Bezier Easing Parameters Approximation
// of Robert Penner's Tween Equations

// values based on https://github.com/KinkumaDesign/CustomMediaTimingFunction/blob/master/src/KKCustomMediaTimingFunction.m

var KKEasing = {
	InSine: [0.44, 0, 0.99, 0.98],
	OutSine: [0, 0.44, 0.98, 0.99],
	InOutSine: [0.36, 0, 0.64, 1],
	OutInSine: [0, 0.36, 1, 0.64],
	InQuad: [0.51, 0, 0.96, 0.9],
	OutQuad: [0, 0.51, 0.9, 0.96],
	InOutQuad: [0.43, 0, 0.57, 1],
	OutInQuad: [0, 0.43, 1, 0.57],
	InCubic: [0.55, 0, 0.7, 0.19],
	OutCubic: [0, 0.55, 0.19, 0.7],
	InOutCubic: [0.7, 0, 0.3, 1],
	OutInCubic: [0, 0.7, 1, 0.3],
	InQuart: [0.74, 0, 0.74, 0.19],
	OutQuart: [0, 0.74, 0.19, 0.74],
	InOutQuart: [0.85, 0, 0.13, 0.99],
	OutInQuart: [0, 0.85, 0.99, 0.13],
	InQuint: [0.79, 0, 0.75, 0.1],
	OutQuint: [0, 0.79, 0.1, 0.75],
	InOutQuint: [0.9, 0, 0.09, 1],
	OutInQuint: [0, 0.9, 1, 0.09],
	InExpo: [0.81, 0, 0.83, 0.11],
	OutExpo: [0, 0.81, 0.11, 0.83],
	InOutExpo: [0.97, 0, 0.02, 0.99],
	OutInExpo: [0, 0.97, 0.99, 0.02],
	InCirc: [0.67, 0, 0.99, 0.57],
	OutCirc: [0, 0.67, 0.57, 0.99],
	InOutCirc: [0.92, 0.15, 0.08, 0.82],
	OutInCirc: [0.15, 0.92, 0.82, 0.08],
	Linear: [0.00, 0.00, 1.00, 1.00]
};


// Values http://matthewlein.com/ceaser/


var matthewlein = {
	"linear": "0.250, 0.250, 0.750, 0.750",
	"ease (default)": "0.250, 0.100, 0.250, 1.000",
	"ease-in": "0.420, 0.000, 1.000, 1.000",
	"ease-out": "0.000, 0.000, 0.580, 1.000",
	"ease-in-out": "0.420, 0.000, 0.580, 1.000",
	"easeInQuad": "0.550, 0.085, 0.680, 0.530",
	"easeInCubic": "0.550, 0.055, 0.675, 0.190",
	"easeInQuart": "0.895, 0.030, 0.685, 0.220",
	"easeInQuint": "0.755, 0.050, 0.855, 0.060",
	"easeInSine": "0.470, 0.000, 0.745, 0.715",
	"easeInExpo": "0.950, 0.050, 0.795, 0.035",
	"easeInCirc": "0.600, 0.040, 0.980, 0.335",
	"easeInBack": "0.600, -0.280, 0.735, 0.045",
	"easeOutQuad": "0.250, 0.460, 0.450, 0.940",
	"easeOutCubic": "0.215, 0.610, 0.355, 1.000",
	"easeOutQuart": "0.165, 0.840, 0.440, 1.000",
	"easeOutQuint": "0.230, 1.000, 0.320, 1.000",
	"easeOutSine": "0.390, 0.575, 0.565, 1.000",
	"easeOutExpo": "0.190, 1.000, 0.220, 1.000",
	"easeOutCirc": "0.075, 0.820, 0.165, 1.000",
	"easeOutBack": "0.175, 0.885, 0.320, 1.275",
	"easeInOutQuad": "0.455, 0.030, 0.515, 0.955",
	"easeInOutCubic": "0.645, 0.045, 0.355, 1.000",
	"easeInOutQuart": "0.770, 0.000, 0.175, 1.000",
	"easeInOutQuint": "0.860, 0.000, 0.070, 1.000",
	"easeInOutSine": "0.445, 0.050, 0.550, 0.950",
	"easeInOutExpo": "1.000, 0.000, 0.000, 1.000",
	"easeInOutCirc": "0.785, 0.135, 0.150, 0.860",
	"easeInOutBack": "0.680, -0.550, 0.265, 1.550"
}

// functions based on https://github.com/sole/tween.js/blob/master/src/Tween.js

Tween = {

	LinearNone: function ( k ) {

		return k;

	},

	QuadraticIn: function ( k ) {

		return k * k;

	},

	QuadraticOut: function ( k ) {

		return k * ( 2 - k );

	},

	QuadraticInOut: function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
		return - 0.5 * ( --k * ( k - 2 ) - 1 );

	},

	CubicIn: function ( k ) {

		return k * k * k;

	},

	CubicOut: function ( k ) {

		return --k * k * k + 1;

	},

	CubicInOut: function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
		return 0.5 * ( ( k -= 2 ) * k * k + 2 );

	},

	QuarticIn: function ( k ) {

		return k * k * k * k;

	},

	QuarticOut: function ( k ) {

		return 1 - ( --k * k * k * k );

	},

	QuarticInOut: function ( k ) {

		if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
		return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

	},

	QuinticIn: function ( k ) {

		return k * k * k * k * k;

	},

	QuinticOut: function ( k ) {

		return --k * k * k * k * k + 1;

	},

	QuinticInOut: function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
		return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

	},

	SinusoidalIn: function ( k ) {

		return 1 - Math.cos( k * Math.PI / 2 );

	},

	SinusoidalOut: function ( k ) {

		return Math.sin( k * Math.PI / 2 );

	},

	SinusoidalInOut: function ( k ) {

		return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

	},

	ExponentialIn: function ( k ) {

		return k === 0 ? 0 : Math.pow( 1024, k - 1 );

	},

	ExponentialOut: function ( k ) {

		return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

	},

	ExponentialInOut: function ( k ) {

		if ( k === 0 ) return 0;
		if ( k === 1 ) return 1;
		if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
		return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

	},

	CircularIn: function ( k ) {

		return 1 - Math.sqrt( 1 - k * k );

	},

	CircularOut: function ( k ) {

		return Math.sqrt( 1 - ( --k * k ) );

	},

	CircularInOut: function ( k ) {

		if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
		return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

	},

	ElasticIn: function ( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k === 0 ) return 0;
		if ( k === 1 ) return 1;
		if ( !a || a < 1 ) { a = 1; s = p / 4; }
		else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
		return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

	},

	ElasticOut: function ( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k === 0 ) return 0;
		if ( k === 1 ) return 1;
		if ( !a || a < 1 ) { a = 1; s = p / 4; }
		else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
		return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

	},

	ElasticInOut: function ( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k === 0 ) return 0;
		if ( k === 1 ) return 1;
		if ( !a || a < 1 ) { a = 1; s = p / 4; }
		else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
		if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
		return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

	},

	BackIn: function ( k ) {

		var s = 1.70158;
		return k * k * ( ( s + 1 ) * k - s );

	},

	BackOut: function ( k ) {

		var s = 1.70158;
		return --k * k * ( ( s + 1 ) * k + s ) + 1;

	},

	BackInOut: function ( k ) {

		var s = 1.70158 * 1.525;
		if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
		return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

	},

	BounceIn: function ( k ) {

		return 1 - TWEEN.Easing.Bounce.Out( 1 - k );

	},

	BounceOut: function ( k ) {

		if ( k < ( 1 / 2.75 ) ) {

			return 7.5625 * k * k;

		} else if ( k < ( 2 / 2.75 ) ) {

			return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

		} else if ( k < ( 2.5 / 2.75 ) ) {

			return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

		} else {

			return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

		}

	},

	BounceInOut: function ( k ) {

		if ( k < 0.5 ) return BounceIn( k * 2 ) * 0.5;
		return BounceOut( k * 2 - 1 ) * 0.5 + 0.5;

	}

};
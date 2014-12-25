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

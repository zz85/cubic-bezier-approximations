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


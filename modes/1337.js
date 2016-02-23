'use strict';

module.exports = function(message){
	var definitions = {
		A: "4",
		B: "8",
		C: "(",
		D: "|>",
		E: "3",
		G: "9",
		H: "|-|",
		I: "1",
		J: "_|",
		K: "|<",
		L: "|_",
		M: "/\\/\\",
		N: "/\\/",
		O: "0",
		S: "5",
		T: "7",
		U: "|_|",
		V: "\\/",
		W: "\\/\\/",
		X: "><",
		Y: "'/",
		Z: "2"
	}
	message=message.toUpperCase();
	for (var key in definitions){
		if (definitions.hasOwnProperty(key)){
			message=message.replace(new RegExp(key, 'g'), definitions[key]);
		}
	}
	return message;
}
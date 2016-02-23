'use strict';

module.exports = function(context){
	GLOBAL.mode=context.args.join(" ");
	return "Modifier set to "+GLOBAL.mode;
}
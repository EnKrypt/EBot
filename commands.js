'use strict';

module.exports = function(context){
	context.args=context.message.split(" ");
	context.command=context.args.shift().substring(1).toLowerCase();
	
	try{
		var output=loadcommand(context);
		return require('./modes/'+GLOBAL.mode.toLowerCase())(output);
	}
	catch(e){
		return loadcommand(context);
	}
}

var loadcommand = function(context){
	try{
		return require('./commands/'+context.command)(context);
	}
	catch(e){
		console.log(e.stack);
		return context.command+" is not a valid command";
	}
}
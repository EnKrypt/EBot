'use strict';

module.exports = function(context){
	context.args=context.message.split(" ");
	context.command=context.args.shift().substring(1).toLowerCase().split("/")[0];
	
	try{
		var modetemplate=require('./modes/'+GLOBAL.mode.toLowerCase());
		return modetemplate(loadcommand(context));
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
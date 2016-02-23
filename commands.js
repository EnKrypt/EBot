'use strict';

module.exports = function(context){
	context.args=context.message.split(" ");
	context.command=context.args.shift().substring(1);
	
	try{
		return require('./commands/'+context.command)(context);
	}
	catch(e){
		console.log(e.stack);
		return (context.command+" is not a valid command");
	}
}
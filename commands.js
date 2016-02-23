'use strict';

module.exports = function(message){
	var args=message.split(" ");
	var command=args.shift().substring(1);
	
	try{
		return require('./commands/'+command)(args);
	}
	catch(e){
		return (command+" is not a valid command");
	}
}
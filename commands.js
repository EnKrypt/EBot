'use strict';

module.exports = function(client, message){
	var args=message.split(" ");
	var command=args.shift().substring(1);
	
	try{
		return require('./commands/'+command)(client, args);
	}
	catch(e){
		console.log(e.stack);
		return (command+" is not a valid command");
	}
}
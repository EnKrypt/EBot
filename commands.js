'use strict';

module.exports = function(client, message, to){
	var args=message.split(" ");
	var command=args.shift().substring(1);
	
	try{
		require('./commands/'+command)(client, args, to);
	}
	catch(e){
		client.say(to, command+" is not a valid command");
	}
}
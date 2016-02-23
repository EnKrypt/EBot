'use strict';

module.exports = function(client, args, to){
	client.say(to, args.join(" "));
}
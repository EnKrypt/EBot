'use strict';

var _=require('underscore');

module.exports = function(context){
	if (context.args){
		if (context.args[0].toUpperCase()=="QUIT"){
			return 'Lol no.'
		}
		else if (context.args[0].toUpperCase()=="PART" && context.args[1]){
			var parts = context.args[1].toUpperCase().split(",");
			if (_(_.uniq(context.channels)).difference(_.uniq(parts))==0){
				return 'Must be subscribed to at least one channel';
			}
		}
		context.client.send.apply(context.client, context.args);
	}
}
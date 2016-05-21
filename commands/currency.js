'use strict';

var request=require('then-request');

module.exports = function(context){
	if (context.args.length>2){
		request('GET', 'https://api.fixer.io/latest?base='+context.args[1]+'&symbols='+context.args[2]).done(function(response){
			if (response.getBody('utf8')){
				var rate=parseFloat(JSON.parse(response.getBody('utf8')).rates[context.args[2]]);
				try{
					context.client.say(context.to, context.args[0]+" "+context.args[1]+" is "+(parseFloat(context.args[0])*rate)+" "+context.args[2]);
				}
				catch(e){
					return "Argument <amount> must be a number";
				}
			}
			else{
				return "Could not connect to API";
			}
		});
	}
	else{
		return "!currency <amount> <from code> <to code>"
	}
}
'use strict';

var request=require('then-request');

module.exports = function(context){
	if (context.args.length>2){
		request('GET', 'https://api.fixer.io/latest?base='+encodeURIComponent(context.args[1])+'&symbols='+encodeURIComponent(context.args[2])).done(function(response){
			if (response.body.toString('utf8')){
				var rate=0.0;
				try{
					rate=parseFloat(JSON.parse(response.body.toString('utf8')).rates[context.args[2]]);
					if (isNaN(rate)){
						throw new Error('There was no rate');
					}
				}
				catch(e){
					context.client.say(context.to, "Invalid currency code");
					return;
				}
				if (isNaN(parseFloat(context.args[0]))){
					context.client.say(context.to, "Argument <amount> must be a number");
				}
				else{
					context.client.say(context.to, context.args[0]+" "+context.args[1]+" is "+(parseFloat(context.args[0])*rate)+" "+context.args[2]);
				}
			}
			else{
				context.client.say(context.to, "Could not connect to API");
			}
		});
	}
	else{
		return "!currency <amount> <from code> <to code>"
	}
}
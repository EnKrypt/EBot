'use strict';

var request=require('then-request');

module.exports = function(context){
	if (context.args.length<3){
		request('GET', 'https://api.fixer.io/latest?base='+context.args[1]+'&symbols='+context.args[2]).done(function(response){
			if (response.getBody('utf8')){
				var rate=parseInt(JSON.parse(response.getBody('utf8')).rates[context.args[2]]);
				try{
					return parseInt(context.args[0])*rate;
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
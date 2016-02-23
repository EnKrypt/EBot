'use strict';

var fs=require('fs');

module.exports = function(context){
	fs.readFile("./quotes.txt", 'utf8', function(err, data){
		if(err) throw err;
		data=data.replace(/\r/g,'');
		var lines = data.split('\n');
		if (context.args.join('').trim()){
			for (var i=0;i<lines.length;i++){
				if ((context.args.map(function(x){ return x.toUpperCase(); })).indexOf(lines[i].split(' ')[lines[i].split(' ').length-1].toUpperCase())==-1){
					lines.splice(i,1);
					i--;
				}
			}
		}
		context.client.say(context.to, (lines[Math.floor(Math.random()*lines.length)] || "Nothing to quote"));
	});
}
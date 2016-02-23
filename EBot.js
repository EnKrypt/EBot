'use strict';

//Dependencies
var irc=require('irc'),
	rls=require('readline-sync'),
	fs=require('fs');
	
//Configure EBot	
var host="localhost";
var port=6667;
var channels=[];

GLOBAL.mode="";
var nick="EBot";
var delim="!";

//Details about the IRC environment
console.log("IRC Bot by EnKrypt");
host=rls.question("Host: ") || host;
port=rls.question("Port (Default is 6667): ") || port;
channels.push(rls.question("Channel: ").toUpperCase());

var client=new irc.Client(host,"EBot", {
	userName: "Bot",
	realName: "Bot",
	channels: channels,
	port: port
});

client.addListener('message', function(from, to, message){
	if (message[0]==delim){
		var context={
			channels: channels,
			delim: delim,
			client: client,
			from: from,
			host: host,
			message: message,
			nick: nick,
			port: port,
			to: to!=nick?to:from
		};
		client.say(context.to, require('./commands')(context));
	}
	else if (channels.indexOf(to.toUpperCase())!=-1 && message.length<512 && message.length>10){
		fs.appendFile("./quotes.txt", "\r\n\""+message+"\" ~ "+from, function(err){
			if (err) console.log(err.stack);
		})
	}
});

client.addListener('raw', function(message){
	if (message.rawCommand=='JOIN'){
		for (var i=0;i<message.args.length;i++){
			if (channels.indexOf(message.args[i].toUpperCase())==-1){
				channels.push(message.args[i].toUpperCase());
			}
		}
	}
	if (message.rawCommand=='PART'||message.rawCommand=='KICK'){
		for (var i=0;i<message.args.length;i++){
			if (channels.indexOf(message.args[i].toUpperCase())!=-1){
				channels.splice(channels.indexOf(message.args[i].toUpperCase()),1);
			}
		}
	}
	console.log((message.nick || "")+" "+message.rawCommand+" "+message.args.join(" "));
});

client.addListener('join', function(channel, user, message){
	if (user!=nick){
		client.say(channel, "Welcome to "+channel+", "+user);
	}
});

client.addListener('error', function(message){
	console.log("Error : "+message);
});
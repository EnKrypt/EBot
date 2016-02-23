'use strict';

//Dependencies
var irc=require('irc'),
	rls=require('readline-sync');
	
//Configure EBot	
var host="localhost";
var port=6667;
var channels=[];

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
		client.say(to, require('commands')(message));
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
				channels.pop(message.args[i].toUpperCase());
			}
		}
	}
});
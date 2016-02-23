'use strict';

module.exports = function(client, args){
	client.send.apply(client, args);
}
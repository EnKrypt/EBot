'use strict';

module.exports = function(context){
	context.client.send.apply(context.client, context.args);
}
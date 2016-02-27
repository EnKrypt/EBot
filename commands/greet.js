'use strict';

module.exports = function(context){
	GLOBAL.greet=!GLOBAL.greet;
	return "Users shall "+(GLOBAL.greet?"now":"no longer")+" be greeted on joining";
}
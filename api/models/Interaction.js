/**
* PageInteraction.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id:{
		type:'integer',
		autoIncrement: true,
		primaryKey: true,
		required:true
	},
	description:{
		type: 'string'
	},
	hashtags:{
		collection:'hashtag',
		via:'interactions'
	},
	order:{
		type:'float'
	},
	website:{
		model:'website',
		required:true
	},
	video:{
		type:'string'
	},
	layers:{
		collection:'layer',
		via:'interaction'
	},
	main:{
		type:'boolean',
		defaultsTo:	false
	}
 }
};


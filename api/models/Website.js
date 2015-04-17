/**
* Website.js
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
	name:{
		type:'string',
		required:true

	},
	description:{
		type: 'string'
	},
	tag:{
		type: 'string'
	},
	url:{
		type: 'string'
	},
	creator:{
		model:'creator',
		required:true
	},
	webcolors:{
		collection:'color',
		via: 'websites'
	},
	designtags:{
		collection:'hashtag',
		via:'websites'
	},
	interactions:{
		collection:'interaction',
		via:'website'
	}

  }
};


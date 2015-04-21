/**
* Hashtag.js
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
	type:{
		type: 'string',
    	enum: ['design', 'effect'],
    	required:true
	},
	imgExample:{
		type: 'string'
	},
	order:{
		type:'float'
	},
	websites:{
		collection:'website',
		via:'designtags',
		dominant: true
	},
	interactions:{
		collection:'interaction',
		via:'hashtags',
		dominant: true
	}
	
  }
};


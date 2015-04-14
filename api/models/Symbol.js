/**
* Symbols.js
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
		type:'string'
	},
	type:{
		type:'string'
	},
	icon:{
		type:'string',
		enum:['event','action']
	},
	layers:{
		collection:'symbolLayerPosition',
		via:'symbol'
	}
  }
};


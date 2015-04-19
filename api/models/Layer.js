/**
* Layer.js
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
	type:{
		type:'string',
		enum:['EventBase','EventSketch','ResultBase','ResultSketch'],
		size:15
	},
	image:{
		type:'string'
	},
	mode:{
		type:'string',
		enum:['image','symbol']
	},
	symbols:{
		collection:'symbolLayerPosition',
		via:'layer'
	},
	interaction:{
		model:'interaction',
		required:true
	},
	order:{
		type:'float'
	}

  }
};


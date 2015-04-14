/**
* SymbolLayerPosition.js
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
	symbol:{
		model: 'symbol',
		required:true
	},
	layer:{
		model: 'layer',
		required:true
	},
	positionX:{
		type: 'integer',
		required:true
	},
	positionY:{
		type: 'integer',
		required:true
	},
	width:{
		type: 'integer',
		required:true
	},
	height:{
		type: 'integer',
		required:true	
	}
  }
};


/**
* SearchV.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	migrate: 'safe',
	autoCreatedAt: false,
  	autoUpdatedAt: false,
  attributes: {
  	id:{
		type:'integer',
		autoIncrement: true,
		primaryKey: true,
		required:true
	},
	iIds:{
		type:'string'
	},
	cid:{
		type:'string'
	}
	,
	hinter:{
		type:'string'
	},
	name:{
		type:'string'
	},
	cname:{
		type:'string'
	}
	,
	description:{
		type:'string'
	}
	,
	cdescription:{
		type:'string'
	}
	,
	idescription:{
		type:'string'
	}
	,
	hashtags:{
		type:'string'
	}
 }
};


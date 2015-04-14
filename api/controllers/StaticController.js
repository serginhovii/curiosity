/**
 * StaticController
 *
 * @description :: Server-side logic for managing statics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  home: function (req, res){
	 return res.view({});
  },
  lois: function (req, res){
	 return res.view({});
  },
  chulakov: function (req, res){
	 return res.view({});
  },
  chulakovMov: function (req, res){
	 return res.view();
  },
  gDrive: function (req, res){
	 return res.view({
					nombre:'Sergio', 
					nombre1:'Serginho'
					});
  },
  chulakoveffect1: function (req, res){
	 return res.view();
  },
  chulakoveffect2: function (req, res){
   return res.view();
  },
  chulakoveffect3: function (req, res){
   return res.view();
  },
  reference:function (req, res){
    return res.view();
  }

  
};


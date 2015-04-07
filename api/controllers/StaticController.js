/**
 * StaticController
 *
 * @description :: Server-side logic for managing statics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	home: function (req, res){
	 return res.view({
					nombre:'Sergio', 
					nombre1:'Serginho'
					});
  },
  lois: function (req, res){
	 return res.view({
					nombre:'Sergio', 
					nombre1:'Serginho'
					});
  },
  chulakov: function (req, res){
	 return res.view({
					nombre:'Sergio', 
					nombre1:'Serginho'
					});
  },
  chulakovMov: function (req, res){
	 return res.view({
					nombre:'Sergio', 
					nombre1:'Serginho'
					});
  },
  gDrive: function (req, res){
	 return res.view({
					nombre:'Sergio', 
					nombre1:'Serginho'
					});
  },
  videoChulakov:function(req,res){
			
			return res.send('<video id="video'+req.query.id+'" class="interactionVideo" width="'+req.query.width+'" autoplay loop>'+
			'<source src="/images/chulakov/web/'+req.query.id+'/'+req.query.id+'.0.mp4" type="video/mp4">'+
			'Your browser doesnt support video'+
		'</video>');
	},
  videoLois:function(req,res){
			
			return res.send('<video id="video'+req.query.id+'" class="interactionVideo" width="350" autoplay loop>'+
			'<source src="/images/loisJeans/'+req.query.id+'Accion/'+req.query.id+'.mp4" type="video/mp4">'+
			'Your browser doesnt support video'+
		'</video>');
	},
	videoGDrive:function(req,res){
			
			return res.send('<video id="video" class="interactionVideo" width="550" autoplay loop>'+
			'<source src="/images/gDrive/gDrive.mp4" type="video/mp4">'+
			'Your browser doesnt support video'+
		'</video>');
	},
	videoHome:function(req,res){
			return res.send('<video id="video" class="interactionVideo" width="'+req.query.width+'" autoplay loop>'+
			'<source src="/images/'+req.query.location+'" type="video/mp4">'+
			'Your browser doesnt support video'+
		'</video>');
	}
};


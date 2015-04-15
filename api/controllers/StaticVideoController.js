/**
 * StaticVideoController
 *
 * @description :: Server-side logic for managing Staticvideos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	chulakov:function(req,res){
			
			return res.send('<video id="video'+req.query.id+'" class="interactionVideo" width="'+req.query.width+'" autoplay loop>'+
			'<source src="/media/static/chulakov/web/'+req.query.id+'/'+req.query.id+'.0.mp4" type="video/mp4">'+
			'Your browser doesnt support video'+
		'</video>');
	},
	lois:function(req,res){
			
			return res.send('<video id="video'+req.query.id+'" class="interactionVideo" width="350" autoplay loop>'+
			'<source src="/media/static/loisJeans/'+req.query.id+'Accion/'+req.query.id+'.mp4" type="video/mp4">'+
			'Your browser doesnt support video'+
		'</video>');
	},
	gDrive:function(req,res){
			
			return res.send('<video id="video" class="interactionVideo" width="550" autoplay loop>'+
			'<source src="/media/static/gDrive/gDrive.mp4" type="video/mp4">'+
			'Your browser doesnt support video'+
		'</video>');
	},
	home:function(req,res){
			return res.send('<video id="video" class="interactionVideo" width="'+req.query.width+'" autoplay loop>'+
			'<source src="/images/'+req.query.location+'" type="video/mp4">'+
			'Your browser doesnt support video'+
		'</video>');
	}
};


/**
 * DynamicVideoController
 *
 * @description :: Server-side logic for managing dynamicvideos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	video:function(req,res){
			var interaction;
			async.series([
				function(callback){
					Interaction.find({where:{id:req.param('interaction')}}).populate('website').exec(function(err, datInteraction){
						interaction=datInteraction.pop().toJSON();
						console.log(interaction);
						callback(err,1);

					});
				}],
				function(err, results){
				return res.view({
                				interaction:interaction.id,
                				website:interaction.website.id,
                				video:interaction.video,
                				width:req.param('width')
                				});  
          	});
			
	}
};


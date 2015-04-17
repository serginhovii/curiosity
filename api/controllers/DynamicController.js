/**
 * DynamicController
 *
 * @description :: Server-side logic for managing dynamics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  home:function(req,res){
    //
      var pages=[];
      /*
        Layer.find({where:{interaction:recSite.interactions[0].id}}).exec(function(err, datLayer){
            while(datLayer.length){  
              recSite.layers.push(datLayer.pop().toJSON());
              console.log('here');    
            }
        });
      */
       
      Website.find().populate('creator').populate('interactions', {where:{main:true}}).exec(function(err, datSite){
          while(datSite.length){
              var recSite=datSite.pop().toJSON();
              recSite.layers=[];
              pages.push(recSite);
           }
           return res.view({pages:pages});   
      });
      
       
  },
	hi: function (req, res) {
    var auxi;
    Creator.find({id:1}).populate('websites').exec(function(err,myRecord){
      
      while(myRecord.length){
        auxi=myRecord.pop().toJSON();
        console.log(auxi);
        console.log("--------------------");
      }
 		return res.json(auxi.websites);     
    });
    
  }
};


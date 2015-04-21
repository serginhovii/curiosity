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
      async.series([
                    function(callback){
                      Website.find().populate('creator').populate('interactions', {where:{main:true}}).exec(function(err, datSite){
                              while(datSite.length){
                                  var recSite=datSite.pop().toJSON();
                                  recSite.layers=[];
                                  pages.push(recSite);
                               }  
                          callback(err,1);         
                      });
                    },
                    function(callback){
                      async.eachSeries(
                                pages, 
                                function(page,callback){
                                    Layer.find({where:{interaction:page.interactions[0].id},sort:{order:0,type:0 }}).exec(function(err, datLayer){
                                      while(datLayer.length){  
                                          page.layers.push(datLayer.pop().toJSON());
                                      }
                                    callback(err,1);
                                    });
                                }
                                , 
                                function(err, result){
                                  if(err==null){
                                  callback(null,1);
                                  }
                                }
                      );
                    }
                    ],
                    function(err, results){
                      if(err==null){
                        return res.view({pages:pages});  
                      }
                    });
  },
  page:function (req, res) {
    var page;
    var interactions=[];
      async.series([
                    function(callback){
                      Website.find({where:{tag:req.param('tag')}}).populate('creator').populate('designtags').exec(function(err, datSite){
                        page=datSite.pop().toJSON();
                        console.log(page.designtags.id);
                         callback(err,1);         
                      });

                    },
                    function(callback){

                      Interaction.find({where:{website:page.id},sort:{order:0}}).populate('layers').populate('hashtags').exec(function(err, datInteraction){
                            while(datInteraction.length){  
                                  interactions.push(datInteraction.pop().toJSON());
                            }
                            
                            callback(err,1);
                        });

                      }
                    
                    ],
                    function(err, results){
                      if(err==null){
                        
                        return res.view({page:page,interactions:interactions});  
                      }
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


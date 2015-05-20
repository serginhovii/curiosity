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
                      Website.find({where:{visible:true}}).populate('creator').populate('interactions', {where:{main:true}}).exec(function(err, datSite){
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
                                          var layer=datLayer.pop().toJSON();  
                                          page.layers.push(layer);

                                      }
                                    callback(err,1);
                                    });
                                    
                                }
                                , 
                                function(err, result){
                                  if(err==null){
                                  callback(err,1);
                                  }
                                }
                      );
                    }
                    ],
                    function(err, results){
                      if(err==null){
                        return res.view({pages:pages,moment:require('moment')});  
                      }
                      else{
                        console.log(err);
                      }
                    });
  },
  search:function(req,res){
    //
      var pages=[];
      var search=[];
      var query=req.query.text;//.param('text');
      var queryProcessed;
      console.log(query);
      if(query!=null){
        queryProcessed=("'"+query.trim()+"'").replace(/\s{2,}/g, ' ').replace(/ /g,"|");
      }
      else{
        query='';
        queryProcessed='';
      }
        
      async.series([
                    function(callback){            
                        SearchV.query(
                                  "SELECT id , totalweight "+
                                  "FROM  "+
                                      "( SELECT id , CASE "+
                                      "WHEN name  REGEXP "+queryProcessed+" THEN 200 "+
                                      "ELSE 0 "+
                                      "END +"+
                                      "CASE "+
                                      "WHEN hashtags  REGEXP "+queryProcessed+" THEN 100 "+
                                      "ELSE 0 "+
                                      "END + "+
                                      "CASE "+
                                      "WHEN cname  REGEXP "+queryProcessed+" THEN 75 "+
                                      "ELSE 0 "+
                                      "END + "+  
                                      "CASE "+
                                      "WHEN (description  REGEXP "+queryProcessed+" "+
                                        "OR idescription REGEXP "+queryProcessed+") THEN 50 "+
                                        "ELSE 0 "+
                                      "END + "+
                                      "CASE "+
                                      "WHEN cdescription  REGEXP "+queryProcessed+" THEN 25 "+
                                      "ELSE 0 "+
                                      "END  totalweight "+ 
                                      "FROM searchv )  searchv1 "+
                                  "WHERE totalweight > 0 "+
                                  "ORDER BY totalweight ASC"
                                  ,function(err,datSearch){
                          while(datSearch.length){
                            var dSite=datSearch.pop();
                            search.push(dSite);
                          }
                          callback(err,1); 
                        });
                    },function(callback){
                        async.eachSeries(
                            search,
                            function(searchItem,callback){
                              Website.find({where:{id:searchItem.id}}).populate('creator').populate('interactions', {where:{main:true}}).exec(function(err, datSite){
                                      while(datSite.length){
                                          var recSite=datSite.pop().toJSON();
                                          recSite.layers=[];
                                          pages.push(recSite);
                                       }  
                                  callback(err,1);         
                              });
                            }, 
                            function(err, result){
                              if(err==null){
                              callback(err,1);
                              }
                            }
                        );
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
                                  callback(err,1);
                                  }
                                }
                      );
                    }
                    ],
                    function(err, results){
                      if(err==null){
                        return res.view({pages:pages,moment:require('moment'),search:search,query:query});  
                      }
                    });
      
  },
  page:function (req, res) {
    var page;
    var interactions=[];

      async.series([
                    function(callback){
                      Website.find({where:{tag:req.param('tag')}}).
                      populate('designtagsI').
                      populate('creator').
                      populate('interactions',{where:{main:false}, order:{sort:0}}).exec(function(err, datSite){
                        page=datSite.pop().toJSON();
                         callback(err,1);         
                      });
                    },
                    function(callback){
                      page.iHashtags=[];
                      async.eachSeries(
                                page.interactions, 
                                function(interaction,callback){

                                  async.series([
                                      function(callback){//Filling the hashtags
                                        interaction.hashtags=[];
                                        HashtagInteraction.find({where:{interaction:interaction.id}}).
                                        populate('hashtag').exec(
                                          function(err, datHashTag){
                                              while(datHashTag.length){ 
                                                var ht=datHashTag.pop().toJSON();
                                                console.log(ht);
                                                console.log("otraaaaaaaaaaaaa");
                                                interaction.hashtags.push(ht.hashtag);
                                                if(page.iHashtags.indexOf(ht.hashtag.name)<0){
                                                  page.iHashtags.push(ht.hashtag.name);
                                                }
                                                
                                              }

                                              callback(err,1);
                                          });
                                      },
                                      function(callback){//Filling the layers
                                        interaction.layers=[];
                                        Layer.find({where:{interaction:interaction.id},sort:{order:1,type:1}}).exec(
                                          function(err, datLayer){
                                              while(datLayer.length){ 
                                                interaction.layers.push(datLayer.pop().toJSON());
                                              }
                                              callback(err,1);
                                          });
                                      }
                                    ],
                                    function(err, results){
                                      if(err==null){
                                        callback(err,1);
                                      }
                                    });
                                }, 
                                function(err, result){
                                  if(err==null){
                                    callback(err,1);
                                  }
                                }
                      );
                    },
                    function(callback){//Filling the website hashtags
                      HashtagWebsite.find({where:{website:page.id}}).populate('hashtag').exec(
                        function(err, datWebHashTag){
                            while(datWebHashTag.length){ 
                              var ht=datWebHashTag.pop().toJSON()
                              if(page.iHashtags.indexOf(ht.hashtag.name)<0){
                                page.iHashtags.push(ht.hashtag.name);
                              }
                              
                            }

                            callback(err,1);
                        });
                    }
                    ],
                    function(err, results){
                      if(err==null){
                        page.iHashtags=page.iHashtags.sort();
                        return res.view({page:page,moment:require('moment')});  
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


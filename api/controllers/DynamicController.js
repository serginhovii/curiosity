/**
 * DynamicController
 *
 * @description :: Server-side logic for managing dynamics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
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


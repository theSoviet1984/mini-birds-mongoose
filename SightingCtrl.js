var Sighting = require('./Sighting');

module.exports ={

  create: function(req, res){
    var newSighting = Sighting(req.body);
    newSighting.save(function(err, result){
      if(err)res.send(err)
      res.send(result)
    })
  },
  read: function(req, res){
    Sighting.find(req.query).exec(function(err, result){
      if(err)res.send(err)
      res.send(result);
    })
  },
  update: function(req, res){
    Sighting.findOneAndUpdate({_id:req.params.id}, {$set:{order:req.body.order}},{new:true},function(err, result){
      if(err)res.send(err)
      res.send(result)
    })
  },
  delete: function(req, res){
    Sighting.findOneAndRemove({_id: req.params.id}, function(err, result){
      if(err)res.send(err)
      res.send(result)
    })
  }
}

let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Dish = require('../db/schema.js').Dish // MOONGOOSE MODEL

  
apiRouter
  .get('/users', function(req, res){
    User.find(req.query , "-password", function(err, results){
      if(err) return res.json(err) 
      res.json(results)
    })
  })

apiRouter
  .get('/users/:_id', function(req, res){
    User.findById(req.params._id, "-password", function(err, record){
      if(err || !record ) return res.json(err) 
      res.json(record)
    })
  })
  .put('/users/:_id', function(req, res){
    User.findById(req.params._id, "-password",function(err, record){
      if(err || !record) return res.json(err)
      let recordWithUpdates = helpers.updateFields(record, req.body)
      recordWithUpdates.save(function(err){
        if(err) return res.json(err) 
        res.json(recordWithUpdates)
      })
    })
  })
  .delete('/users/:_id', function(req, res){
    User.remove({ _id: req.params._id}, (err) => {
      if(err) return res.json(err)
      res.json({
        msg: `record ${req.params._id} successfully deleted`,
        _id: req.params._id
      })
    })  
  })

  // Routes for a Model(resource) should have this structure

  // this route will catch a post request to save a new dish to database
  apiRouter.post('/dishes', function(request, response){
    
    let dish = new Dish(request.body)
    dish.save(function(err){
      if(err) {
        response.send(err)
      }
        response.json(dish)
    })

  })

  apiRouter.get('/dishes', function(request, response){
    // We don't need to create a new instance, we can simply use the Constructor to find
    Dish.find(request.query, function(err, records) { 
    //request.query returns an object with all additional URL parameters (if they exist)
      if(err) {
        response.send(err)
      }
      response.json(records)
    })
  })

  apiRouter.get('/user/dishes', function(request, response){
    Dish.find({authorId: request.user._id}, function(err, records){
      if(err) {
        response.send(err)
      }
      response.json(records)
      })
  })



module.exports = apiRouter
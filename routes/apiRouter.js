let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
<<<<<<< HEAD
let Dish = require('../db/schema.js').Dish // MOONGOOSE MODEL

  
apiRouter
  .get('/users', function(req, res){
    User.find(req.query , "-password", function(err, results){
      if(err) return res.json(err) 
      res.json(results)
=======
let Dish = require('../db/schema.js').Dish //STEP THREE (import schema)


  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err)
        res.json(results)
      })
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
    })
  })

<<<<<<< HEAD
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
=======
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
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
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
<<<<<<< HEAD

  })

  apiRouter.get('/dishes', function(request, response){
    // We don't need to create a new instance, we can simply use the Constructor to find
    Dish.find(request.query, function(err, records) { 
    //request.query returns an object with all additional URL parameters (if they exist)
      if(err) {
        response.send(err)
      }
      response.json(records)
=======
    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
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


//STEP FOUR (build your server side apiroutes)

//this route will create a brand new dish that we will put in the db
apiRouter.post('/dishes', function(request, response) {
    let dish = new Dish(request.body) //create new instance of schema from a MONGOOSE model, request.body is all the information that we have taken from the client side and we send it on the body of the request to the server
    dish.save(function(error) { //saves to db
        if(error) {
            response.send(error)
        }
        else {
            response.json(dish)
        }
    })
})

//this route will show us all the dishes posted by all users
apiRouter.get('/dishes', function(request, response) {
    Dish.find(request.query, function(error, records){  //some methods live directly on the model, so you don't need to create a new instance.
    // request.query parses the parameters and turns them into an object (at this moment we have it just in case)
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})

//get dishes posted by the logged in user
apiRouter.get('/user/dishes', function(request, response) {
    Dish.find({authorId: request.user._id}, function(error, records) { //I want to get all dishes where the author id matches the current id of the user
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})


module.exports = apiRouter
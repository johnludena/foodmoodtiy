let Router = require('express').Router;
let passport = require ('passport')
let User = require('../db/schema.js').User


const authRouter = Router()


authRouter
  .post('/register', function(req, res){
    // passport appends to request
    let newUser = new User(req.body)

    User.find({email: req.body.email}, function(err, results){

<<<<<<< HEAD
      if (err) {
        res.status(500).send(err)
        return
      }

      if(results) { 
        let record = {}
        record.msg = "record already exists"    
=======
      if(results !== null && results.length > 0) {
        let record = {}
        record.msg = "record already exists" ;
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
        record.data = results
        res.json(record)
        return
      }

      newUser.save(function(err){
        req.login(req.body, function(){
          res.json(newUser)
        })
      })
    })
  })

authRouter
  .get('/checkAuth', function (req, res) {
    if (req.user) res.json({user: req.user});
    else res.json({user: null})
  })
  .post('/login', passport.authenticate('local'),
    function(req, res){
      if (!req.user) {
        console.log('having a hard time here')
        res.status(500).json({
          err: 'user doesnt exist'
        })
      }
      else {
        let userCopy = JSON.parse(JSON.stringify(req.user))
        userCopy.password = ''
<<<<<<< HEAD
        console.log('sending user to server')
        res.json(userCopy)        
=======
        res.json(userCopy)
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
      }
    }
  )
  .get('/logout', function (req, res) {
    if (req.user) {
      console.log(req.user)
      let email = req.user.email
      req.logout()
      res.json({
        msg: `user ${email} logged out`
      })
    }
    else {
      res.json({
        msg: 'error: no current user'
      })
    }
  })



module.exports = authRouter
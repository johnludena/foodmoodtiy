const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

<<<<<<< HEAD
const dishSchema = new Schema({
	description: {type: String, required: true},
	rating: {type: Number, required: true},
	likes: {type: Number, default: 0},
	location: {type: String},
	title: {type: String, required: true},
	username: {type: String, required: true},
	imageUrl: {type: String, required: true},
	tags: {type: [String], default: []},
	authorId: {type: String, required: true}
=======
//STEP ONE
const dishSchema = new Schema ({ // establish the properties that we will use for the data
    description: {type: String, required: true}, //some are required to fill out and others have defaults set
    rating: {type: Number, required: true},
    likes: {type: Number, default: 0},
    location: {type: String, required: true},
    title: {type: String, required: true},
    authorEmail: {type: String, required: true},
    imageUrl: {type: String, required: true},
    tags: {type: [String], default: []},
    authorId: {type: String, required: true}
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
})

module.exports = {
  User: createModel('User', usersSchema),
<<<<<<< HEAD
  Dish: createModel('Dish', dishSchema)
=======
  Dish: createModel('Dish', dishSchema) //STEP TWO (export model)
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
}

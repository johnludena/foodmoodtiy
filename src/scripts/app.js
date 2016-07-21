import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from './views/loginView'


const app = function() {

	const AppRouter = Backbone.Router.extend({
		routes: {
			"home":"homeHandler",
			"login":"loginHandler",
			"dish/myDishes":"myDishesHandler",
			"dish/postDishes":"postDishHandler",
			"*catchall":"redirectHandler"
		},

		homeHandler: function(){
			ReactDOM.render(<DishesView />, document.querySelector('.container'))
			console.log('you are now in home...')
		},

		loginHandler: function(){
			ReactDOM.render(<LoginView />, document.querySelector('.container'))
			console.log('you are now in login...')
		},
		myDishesHandler: function(){
			ReactDOM.render(<MyDishesView />, document.querySelector('.container'))
			console.log('you are now in my dishes...')
		},
		postDishHandler: function(){
			ReactDOM.render(<ComposeView />, document.querySelector('.container'))
			console.log('you are now in post dish...')
		},
		redirectHandler: function(){
			location.hash = "home"
		},
		initialize: function(){
			Backbone.history.start()
		}
	})

  	new AppRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
import Backbone from 'backbone'
import _ from 'underscore'
import {DishModel, DishCollection} from './models/models'

const DISH_STORE = _.extend(Backbone.Events, {
	data: {
		collection: new DishCollection()
	},

	_emitChange: function() {
		this.trigger('updateContent')
	},

	_getData: function(){
		return _.clone(this.data)
	},

	_setStore: function(storeProp, payload) {
		// Check to make sure your store has morals (doesn't accept any ol' inputs...)
		if (typeof this.data[storeProp] === 'undefined') {
			throw Error(`${storeProp} property not on the store, make sure to declare`)
		}

		this.data[storeProp] = payload
		this._emitChange
	},

	_initialize: function(){
		// Start listening (pub/sub) from the very get-go, so with any sync/update, emitChange
		// function will fire
		this.data.collection.on('sync update', this._emitChange.bind(this))
	}
})

DISH_STORE._initialize()

export default DISH_STORE
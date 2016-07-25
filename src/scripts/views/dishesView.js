import React from 'react'
import Header from './header'
import DISH_STORE from '../store'
import ACTIONS from '../actions'
import {User} from '../models/models'


const DishesView = React.createClass({
	 
	getInitialState: function(){
		return DISH_STORE._getData()
	},

	componentWillMount: function(){
		ACTIONS.fetchDishes()

		DISH_STORE.on('updateContent', ()=>{
			this.setState(DISH_STORE._getData())
		})
		console.log('dashboard mounted...')
	},

	componentWillUnmount: function() {
		// When view changes (unmounts), stop pub/sub listening...
		DISH_STORE.off('updateContent')
	},

	 render: function() {
	 	return (
	 		<div className="dishesView" >
	 			<Header />
	 			<h3>my dishes</h3>
	 			<DishContainer dishColl={this.state.collection} />
	 		</div>
	 	)
 	}
})

const DishContainer = React.createClass({
	render: function() {
		return (
			<div className="dishContainer">
				{this.props.dishColl.map(
            			(model) => <Dish dishModel={model} />
            		)}
			</div>
			)
	}
})

const Dish = React.createClass({
	render: function() {
		return (
			<div className="dish">
				<p>{this.props.dishModel.get('title')}</p>
				<p>{this.props.dishModel.get('description')}</p>
			</div>
			)
	}
})

export default DishesView

import React from 'react'
import Header from './header'
import DISH_STORE from '../store'
import ACTIONS from '../actions'
import {User} from '../models/models'


const Dashboard = React.createClass({
	 
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

	_handleTagSearch: function(evt){
		if(evt.keyCode === 13) {
			ACTIONS.fetchDishes(evt.target.value)
		}
		
	},

	render: function() {
	 	return (
	 		<div className='dashboard'>
	 			<Header />
	 			<h3>dashboard</h3>
	 			<input type="text" placeholder="Enter a tag" onKeyDown = {this._handleTagSearch} />
	 			<DishContainer dishColl={this.state.collection} />

	 		</div>
	 	)
 	}
})

const DishContainer = React.createClass({
    
    render: function() {
    	console.log('hitting the DishContainer...')
    	console.log('coll>>>>',	this.props.dishColl)

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
	
	_handleLikes: function(){
		ACTIONS.likeDish(this.props.dishModel, User.getCurrentUser())
	},

	render: function() {
		console.log('dish model:', this.props.dishModel)
		return (
			<div className="dish">
				<p>{this.props.dishModel.get('title')}</p>
				<p>{this.props.dishModel.get('description')}</p>
				<img src={this.props.dishModel.get('imageUrl')} />
				<p>tags: {this.props.dishModel.get('tags')}</p>
				<p>Likes: {this.props.dishModel.get('likes').length}</p>
				<button onClick={this._handleLikes}>Like this!</button>
			</div>
			)
	}
})

export default Dashboard

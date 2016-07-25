import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import ReactFilepicker from 'react-filepicker'
import {User} from '../models/models'
import {DishModel} from '../models/models'

const ComposeView = React.createClass({
	 render: function() {
	 	return (
	 		<div className="composeView" >
	 			<Header />
	 			<h3>post a dish!</h3>
	 			<DishPostingForm />
	 		</div>
	 	)
 	}
})

const DishPostingForm = React.createClass({
	
	_handleSubmit: function(e){
		console.log('current user:', User.getCurrentUser())
		e.preventDefault()
		ACTIONS.saveDish({
			title: e.currentTarget.title.value,
			description: e.currentTarget.description.value,
			location: e.currentTarget.location.value,
			rating: e.currentTarget.rating.value,
			authorId: User.getCurrentUser()._id,
			authorEmail: User.getCurrentUser().email,
			tags: e.currentTarget.tags.value.split(','),
			imageUrl: this.url ? this.url : 'http://lorempixel.com/200/200'
		})
		console.log('array of tags:', e.currentTarget.tags.value.split(','))
	},

	_handleImage: function(result){
		this.url = result.url
	},

	render: function() {
		
		return (
			<div className="dishPostingForm">
				<form onSubmit = {this._handleSubmit} >
					<input name="title" placeholder="Enter name" />
					<textarea type="text" name="description" placeholder = "Enter a description"></textarea>
					<input name="location" placeholder="Enter location" />
					<input name="rating" placeholder="Enter rating" />
					<input name="tags" placeholder="Enter tags" />
					<ReactFilepicker apikey="Ahpc85uy2TgaORXDwbkrZz" onSuccess={this._handleImage}/>
					<button type="submit">SUBMIT</button>
				</form>
			</div>
			)
	}
})

export default ComposeView

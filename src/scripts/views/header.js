<<<<<<< HEAD
=======
//COPIED FROM MONGO MESSAGES

>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
import React from 'react'
import ACTIONS from '../actions'

const Header = React.createClass({
<<<<<<< HEAD
	render: function() {
		return (
			<div id="headerContainer">
				<marquee height="50" direction="up" >FoodMood</marquee>
				<NavBar />
			</div>
			)
	}
})

const NavBar = React.createClass({
	render: function() {
		return (
			<div id="navBar">
				<a href="#login">log in</a>
				<a href="#home">home</a>
				<a href="#dish/myDishes">My Dishes</a>
				<a href="#dish/postDishes">compose</a>
				<a href="#" onClick={ACTIONS.logUserOut}>log out</a>
			</div>
			)
	}
=======
    render: function() {
        return (
            <div id="headerContainer">
                <marquee height="50" direction="up" >Food Mood</marquee>
                <NavBar />
            </div>
            )
    }
})

const NavBar = React.createClass({
    render: function() {
        return (
            <div id="navBar"> {/*made a few edits here so that is makes sense for this app*/}
                <a href="#login">Log In</a>
                <a href="#home">Home</a>
                <a href="#dish/myDishes">My Dishes</a>
                <a href="#dish/postDishes">Post Dish</a>
                <a href="#" onClick={ACTIONS.logUserOut}>Log Out</a>
            </div>
            )
    }
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
})

export default Header
<<<<<<< HEAD
import {User} from './models/models'


const ACTIONS = {
	registerUser: function(userObj) {
		User.register(userObj).then(
			// .then takes 2 callbacks, one for SUCCESS, one for FAILURE
			(apiResponse) => {
				this.logUserIn(userObj.email,userObj.password)
				},
			(resp)=> {
				console.log(resp)
				alert('failure to register')
			}
		)
	},

	logUserIn: function(email, password){
		User.login(email,password).then(
			(resp)=> {
				alert(`user ${email} logged in...`)
				console.log(resp)
				location.hash = "home"
			},
			(err)=> {
				alert('log in failed')
				console.log('your error was >>>', err)
			}
		)

	},

	logUserOut: function(){
		User.logout().then(function(){
			location.hash = 'login'
		})
	}
=======
//STEP 6 (CREATE ACTIONS MODULE)

import {User} from './models/models'

const ACTIONS = {

    //WE WANT TO LOG THE USER IN IMMEDIATELY AFTER THEY REGISTER (AS LONG AS THEY REGISTER SUCCESFULLY) THE FIRST METHOD REGISTERS AND THE SECOND LOGS THEM IN
    //.then takes two callback functions, both of these methods use that to create either a 'success' function or a 'failure' function
    registerUser: function(userObj) { //input name doesn't actually matter, we just named it the same as the object that is getting passsed in for our own peace of mind
        User.register(userObj).then( () => ACTIONS.logUserIn(userObj.email, userObj.password),
            (error) => {
                alert('FAILURE TO REGISTER')
                console.log(error)
            }
        )

    },

    logUserIn: function(email, password) {
        User.login(email, password).then(
            (responseData) => {
                alert(`user ${email} logged in!`)
                console.log(responseData)
                location.hash = 'home' //want the page to re-route to the home page after successfull login
            },
            (error) => {
                alert('FAILURE LOGGING IN')
                console.log(error)
            }
        )
    },

    logUserOut: function() { // we want the page to reroute to the login page after a user has logged out (server keeps track os user being logged in with a 'session')
        User.logout().then(
            () => location.hash = 'login'
        )
    }
>>>>>>> 88d53098887d8a832e5625c0521bb81775f27588
}

export default ACTIONS
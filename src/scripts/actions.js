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
}

export default ACTIONS
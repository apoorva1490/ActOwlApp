Ext.define('Sample.controller.Login', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			loginView: 'loginview',
			mainMenuView: 'mainmenuview',
			signUpView: 'signupview'
		},
		control: {
			loginView: {
				signInCommand: 'onSignInCommand',
				signUpCommand: 'onSignUpCommand'
			},
			mainMenuView: {
				onSignOffCommand: 'onSignOffCommand'
			},
			signUpView: {
				signInCommand: 'onSignInCommand'
			}

		}
	},

	// Session token

	sessionToken: null,

	// Transitions
	getSlideLeftTransition: function () {
		return { type: 'slide', direction: 'left' };
	},

	getSlideRightTransition: function () {
		return { type: 'slide', direction: 'right' };
	},

	onSignInCommand: function (view, username, password) {

		console.log('Username: ' + username + '\n' + 'Password: ' + password);

		var me = this,
		loginView = me.getLoginView();

		if (username.length === 0 || password.length === 0) {

			loginView.showSignInFailedMessage('Please enter your username and password.');
			return;
		}

		loginView.setMasked({
			xtype: 'loadmask',
			message: 'Signing In...'
		});

		me.signInSuccess();     //Just simulating success.

//		Ext.Ajax.request({
//		url: '../../services/login.ashx',
//		method: 'post',
//		params: {
//		user: username,
//		pwd: password
//		},
//		success: function (response) {

//		var loginResponse = Ext.JSON.decode(response.responseText);

//		if (loginResponse.success === "true") {
//		// The server will send a token that can be used throughout the app to confirm that the user is authenticated.
//		me.sessionToken = loginResponse.sessionToken;
//		me.signInSuccess();     //Just simulating success.
//		} else {
//		me.signInFailure(loginResponse.message);
//		}
//		},
//		failure: function (response) {
//		me.sessionToken = null;
//		me.signInFailure('Login failed. Please try again later.');
//		}
//		});
	},


	onSignUpCommand: function (view, username, password, email) {

		console.log('Username: ' + username + '\n' + 'Password: ' + password);
		var me = this,
		signUpView = me.getSignUpView();

		var emailAddressIsValid = function (email) {
    	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	    return re.test(email);
    	}
		

		if (username.length === 0 || password.length === 0) {

			signUpView.showSignInFailedMessage('Please enter valid email address.');
			return;
		}
		
		me.signUpSuccess();     //Just simulating success.

//		Ext.Ajax.request({
//		url: '../../services/login.ashx',
//		method: 'post',
//		params: {
//		user: username,
//		pwd: password
//		},
//		success: function (response) {

//		var loginResponse = Ext.JSON.decode(response.responseText);

//		if (loginResponse.success === "true") {
//		// The server will send a token that can be used throughout the app to confirm that the user is authenticated.
//		me.sessionToken = loginResponse.sessionToken;
//		me.signInSuccess();     //Just simulating success.
//		} else {
//		me.signInFailure(loginResponse.message);
//		}
//		},
//		failure: function (response) {
//		me.sessionToken = null;
//		me.signInFailure('Login failed. Please try again later.');
//		}
//		});
	},
	
	signUpSuccess: function () {
		console.log('Register in.');
		var loginView = this.getLoginView();
		var signMenuView = this.getSignUpView();
		loginView.setMasked(false);

		Ext.Viewport.animateActiveItem(signMenuView, this.getSlideLeftTransition());
	},

	signInSuccess: function () {
		console.log('Signed in.');
		var loginView = this.getLoginView();
		var mainMenuView = this.getMainMenuView();
		loginView.setMasked(false);

		Ext.Viewport.animateActiveItem(mainMenuView, this.getSlideLeftTransition());
	},

	signInFailure: function (message) {
		var loginView = this.getLoginView();
		loginView.showSignInFailedMessage(message);
		loginView.setMasked(false);
	},

	onSignOffCommand: function () {

		var me = this;

//		Ext.Ajax.request({
//	url: '../../services/logoff.ashx',
//		method: 'post',
//		params: {
//		sessionToken: me.sessionToken
//		},
//		success: function (response) {

//		// TODO: You need to handle this condition.
//		},
//		failure: function (response) {

//		// TODO: You need to handle this condition.
//		}
//		});

		Ext.Viewport.animateActiveItem(this.getLoginView(), this.getSlideRightTransition());
	}
});
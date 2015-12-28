Ext.define('Sample.view.Login', {
	extend: 'Ext.form.Panel',
	alias: "widget.loginview",
	requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.util.DelayedTask'],
	config: {
		title: 'Login',
		items: [
		        {
		        	xtype: 'image',
		        	src: Ext.Viewport.getOrientation() == 'portrait' ? 'images/login.png' : 'images/login.png',
		        			style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:410px;height:229px;margin:0px' : 'width:40px;height:40px;margin:auto'
		        },
		        {
		        	xtype: 'label',
		        	html: 'Login failed. Please enter the correct credentials.',
		        	itemId: 'signInFailedLabel',
		        	hidden: true,
		        	hideAnimation: 'fadeOut',
		        	showAnimation: 'fadeIn',
		        	style: 'color:#990000;margin:5px 0px;'
		        },
		        {
		        	xtype: 'fieldset',
		        	title: 'Login',
		        	items: [
		        	        {
		        	        	xtype: 'textfield',
		        	        	placeHolder: 'Username',
		        	        	itemId: 'userNameTextField',
		        	        	name: 'userNameTextField',
		        	        	required: true
		        	        },
		        	        {
		        	        	xtype: 'passwordfield',
		        	        	placeHolder: 'Password',
		        	        	itemId: 'passwordTextField',
		        	        	name: 'passwordTextField',
		        	        	required: true
		        	        }
		        	        ]
		        },
		        {
		        	xtype:'container',
		        	layout:{
		        		type:'hbox',
		        		align:'begin',
		        		pack:'center'
		        	},
		        	items:[
		        	       { 

		        	    	   xtype:'button',
		        	    	   text:'Log In',
		        	    	   itemId: 'logInButton',
		        	    	   ui: 'action',
		        	    	   padding: '10px',
		        	    	   style:{color:'rgb(0,150,214)'}	
		        	       },
		        	       {
		        	    	   xtype:'button',
		        	    	   text:'Sign Up',
		        	    	   itemId: 'signUpButton',
		        	    	   ui: 'action',
		        	    	   padding: '10px',
		        	    	   style:{color:'rgb(0,150,214)'}			
		        	       }
		        	       ] },
		        	       {
		        	    	   xtype:'component',
		        	    	   autoEl:{
		        	    		   title:'Remember your email?'
		        	    	   },
		        	    	   html:'Forgot Password?',
		        	    	   style:{color:'rgb(0,150,214)',cursor:'pointer'},
		        	    	   flex:1,
		        	    	   padding: '10px'
		        	       },
		        	       {
		        	    	   xtype:'container',
		        	    	   layout:{
		        	    		   type:'hbox',
		        	    		   align:'begin',
		        	    		   pack:'center'
		        	    	   },
		        	    	   items:[
		        	    	          {    
		        	    	        	  xtype:'component',
		        	    	        	  autoEl:{
		        	    	        		  title:'Remember your email?'
		        	    	        	  },
		        	    	        	  html:'Login With:',
		        	    	        	  style:{color:'rgb(0,150,214)',cursor:'pointer'},
		        	    	        	  flex:1,
		        	    	        	  padding: '10px',
		        	    	        	  align: 'left'
		        	    	          },
		        	    	          { 

		        	    	        	  xtype:'button',
		        	    	        	  text:'F',
		        	    	        	  itemId: 'logInButton',
		        	    	        	  ui: 'action',
		        	    	        	  padding: '10px',
		        	    	        	  style:{color:'rgb(0,150,214)'},
		        	    	        	  align: 'center'
		        	    	          	
		        	    	          },
		        	    	          {
		        	    	        	  xtype:'button',
		        	    	        	  text:'T',
		        	    	        	  itemId: 'signUpButton',
		        	    	        	  ui: 'action',
		        	    	        	  padding: '10px',
		        	    	        	  style:{color:'rgb(0,150,214)'}			
		        	    	          }
		        	    	          ]
		        	       }
		        	       ],
		        	       listeners: [{
		        	    	   delegate: '#logInButton',
		        	    	   event: 'tap',
		        	    	   fn: 'onLogInButtonTap'
		        	       },
		        	       {
		        	    	   delegate: '#signUpButton',
		        	    	   event: 'tap',
		        	    	   fn: 'onSignUpButtonTap'
		        	       }]
	},
	onLogInButtonTap: function () {

		var me = this,
		usernameField = me.down('#userNameTextField'),
		passwordField = me.down('#passwordTextField'),
		label = me.down('#signInFailedLabel'),
		username = usernameField.getValue(),
		password = passwordField.getValue();

		label.hide();

		// Using a delayed task in order to give the hide animation above
		// time to finish before executing the next steps.
		var task = Ext.create('Ext.util.DelayedTask', function () {

			label.setHtml('');

			me.fireEvent('signInCommand', me, username, password);

			usernameField.setValue('');
			passwordField.setValue('');
		});

		task.delay(500);

	},

	onSignUpButtonTap: function () {

		var me = this,
		usernameField = me.down('#userNameTextField'),
		passwordField = me.down('#passwordTextField'),
		label = me.down('#signInFailedLabel'),
		username = usernameField.getValue(),
		password = passwordField.getValue();

		label.hide();

		// Using a delayed task in order to give the hide animation above
		// time to finish before executing the next steps.
		var task = Ext.create('Ext.util.DelayedTask', function () {

			label.setHtml('');

			me.fireEvent('signUpCommand', me, username, password);

			usernameField.setValue('');
			passwordField.setValue('');
		});

		task.delay(500);

	},
	
	var emailAddressIsValid = function (email) {
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	},
	showSignInFailedMessage: function (message) {
		var label = this.down('#signInFailedLabel');
		label.setHtml(message);
		label.show();
	}
});
Ext.define('Sample.view.SignUp', {
    extend: 'Ext.form.Panel',
    alias: "widget.signupview",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.form.Email', 'Ext.field.DatePicker', 'Ext.Label', 'Ext.Img', 'Ext.util.DelayedTask'],
    config: {
        title: 'Login',
        items: [
            {
                xtype: 'image',
                src: Ext.Viewport.getOrientation() == 'portrait' ? 'images/login.png' : 'images/login.png',
                style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:410px;height:229px;margin:auto' : 'width:40px;height:40px;margin:auto'
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
                title: 'New Account',
                items: [
                        {
                            xtype: 'emailfield',
                            placeHolder: 'Email',
                            itemId: 'emailTextField',
                            name: 'emailTextField',
                            required: true
                        },
                    
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
                    },
                    {
                    	xtype: 'datepickerfield',
                    	destroyPickerOnHide: true,
                    	name: 'dateTextField',
                    	itemId: 'dateTextField',
                    	Label: 'Birth Date',
                    	value: new Date(),
                    	picker: {
                    		yearFrom: 1940
                    	}
                    },
                    {
                    	xtype: 'selectfield',
                    	name: 'genderField',
                    	itemId: 'genderTextField',
                    	label: 'Gender',
                    	options: [
                    	          {
                    	        	  text: 'Female',
                    	        	  value: 'female'
                    	          },
                    	          {
                    	        	  text: 'Male',
                    	        	  value: 'male'
                    	          }
                    ]
                    },
                    {
                    	xtype: 'textfield',
                    	placeHolder: 'Location',
                    	name: 'locationtextfield',
                    	itemId: 'locationTextField'
                    	
                    }
                    
                    
                ]
            },
            {
                xtype: 'button',
                itemId: 'signUpButton',
                ui: 'action',
                padding: '10px',
                text: 'Sign Up'
            }
         ],
        listeners: [{
            delegate: '#signUpButton',
            event: 'tap',
            fn: 'onSignUpButtonTap'
        }]
    },
    onSignUpButtonTap: function () {

        var me = this,
            usernameField = me.down('#userNameTextField'),
            passwordField = me.down('#passwordTextField'),
            emailField = me.down('#emailTextField'),
            label = me.down('#signInFailedLabel'),
            username = usernameField.getValue(),
            password = passwordField.getValue();
        	email = passwordField.getValue();

        label.hide();
        
    	var emailAddressIsValid = function (email) {
    	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	    return re.test(email);
    	},

        // Using a delayed task in order to give the hide animation above
        // time to finish before executing the next steps.
        var task = Ext.create('Ext.util.DelayedTask', function () {

            label.setHtml('');

            me.fireEvent('signInCommand', me, username, password, email);

            usernameField.setValue('');
            passwordField.setValue('');
        });

        task.delay(500);

    },
    showSignInFailedMessage: function (message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    }
});
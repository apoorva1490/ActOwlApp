Ext.define('Sample.view.Login', {
    extend: 'Ext.form.Panel',
    alias: "widget.loginview",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 
'Ext.Img','Ext.Button', 'Ext.util.DelayedTask'],
    config: {
        title: 'Login',
        items: [
                    {
                        xtype: 'image',
                        src: Ext.Viewport.getOrientation() == 
'portrait' ? 'images/login.png' : 
'images/login.png',
                        style: Ext.Viewport.getOrientation() == 
'portrait' ? 
'width:100px;height:100px;margin:auto' : 
'width:100px;height:100px;margin:auto'
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
                        title: 'Login Example',
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
            padding: '20px',
			style:{color:'rgb(0,150,214)'}	
			},
		{
            xtype:'button',
            text:'Sign Up',
			itemId: 'SignUpButton',
            ui: 'action',
            padding: '20px',
			style:{color:'rgb(0,150,214)'}			
        }
		]},
			{
							xtype:'component',
							autoEl:{
									title:'Remember your email?'
								},
							html:'Forgot Password?',
							style:{color:'rgb(0,150,214)',cursor:'pointer'},
							flex:1,
							padding: '20px'
			},
			
			{
					xtype:'container',
						layout:{
						type:'hbox',
						align:'center',
						pack:'center'
						},
						items:[ 
						{
							xtype: 'label',
							html: 'Login with:',
							itemId: 'appLogin',
							hideAnimation: 'fadeOut',
							showAnimation: 'fadeIn',
							style: {color:'rgb(0,150,214)',cursor:'pointer'}
						},
						{ 
						    xtype:'image',
							src: Ext.Viewport.getOrientation() == 
									'portrait' ? 'images/login.png' : 'images/login.png',
							style: Ext.Viewport.getOrientation() == 
									'portrait' ?  'width:10px;height:10px;margin:auto' : 'width:10px;height:10px;margin:auto'
						},
						{ 
						    xtype:'image',
							src: Ext.Viewport.getOrientation() == 
									'portrait' ? 'images/login.png' : 'images/login.png',
							style: Ext.Viewport.getOrientation() == 
									'portrait' ?  'width:10px;height:10px;margin:auto' : 'width:10px;height:10px;margin:auto' 
						},
						{ 
						    xtype:'image',
							src: Ext.Viewport.getOrientation() == 
									'portrait' ? 'images/login.png' : 'images/login.png',
							style: Ext.Viewport.getOrientation() == 
									'portrait' ?  'width:10px;height:10px;margin:auto' : 'width:10px;height:10px;margin:auto'
						},
						{ 
						    xtype:'image',
							src: Ext.Viewport.getOrientation() == 
									'portrait' ? 'images/login.png' : 'images/login.png',
							style: Ext.Viewport.getOrientation() == 
									'portrait' ?  'width:10px;height:10px;margin:auto' : 'width:10px;height:10px;margin:auto'
						},
						{ 
						    xtype:'image',
							src: Ext.Viewport.getOrientation() == 
									'portrait' ? 'images/login.png' : 'images/login.png',
							style: Ext.Viewport.getOrientation() == 
									'portrait' ?  'width:10px;height:100px;margin:auto' : 'width:100px;height:10px;margin:auto'
						}
					]}

				
                 /*   {
                        xtype: 'button',
                        itemId: 'logInButton',
                        ui: 'action',
                        padding: '10px',
                        text: 'Log In'
                    },
					 {
                        xtype: 'button',
                        itemId: 'newAcctButton',
                        ui: 'action',
                        padding: '10px',
                        text: 'Sign Up'
                    } */
         ],
listeners: [{
    delegate: '#logInButton',
    event: 'tap',
    fn: 'onLogInButtonTap'
}]
    },
	
	onLogInButtonTap: function () {

    var me = this;

    var usernameField = me.down('#userNameTextField'),
        passwordField = me.down('#passwordTextField'),
        label = me.down('#signInFailedLabel');

    label.hide();

    var username = usernameField.getValue(),
        password = passwordField.getValue();

    // Using a delayed task in order to give the hide animation above
    // time to finish before executing the next steps.
    var task = Ext.create('Ext.util.DelayedTask', function () {

        label.setHtml('');

        me.fireEvent('signInCommand', me, username, password);

        usernameField.setValue('');
        passwordField.setValue('');
    });

    task.delay(500);
}
});
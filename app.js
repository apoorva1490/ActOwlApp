Ext.application({
    name: 'Sample',
    views: ['Login', 'MainMenu', 'SignUp'],
    controllers: ['Login'],
    models: ['Speaker'],
    stores: ['Speakers'],
    launch: function () {

        Ext.Viewport.add([
            { xtype: 'loginview' },
            { xtype: 'mainmenuview' },
            { xtype: 'signupview'}
        ]);
    }
});
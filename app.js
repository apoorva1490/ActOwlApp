Ext.application({
    name: 'Sample',
    views: ['Login'],
    launch: function () {

        Ext.Viewport.add([
            { xtype: 'loginview' }
        ]);
    }
});
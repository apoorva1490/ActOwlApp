Ext.define('Sample.view.MainMenu', {
	extend: 'Ext.Container',
	requires: ['Ext.TitleBar', 'Ext.dataview.DataView','Sample.model.Speaker', 'Sample.store.Speakers'],
	alias: 'widget.mainmenuview',
	config: {
		
		layout: {
			type: 'fit'
		},
	items: [{
			xtype: 'titlebar',
			title: 'Main Menu',
			docked: 'top',
			items: [
			        {
			        	xtype: 'button',
			        	text: 'Log Off',
			        	itemId: 'logOffButton',
			        	align: 'right'
			        }]
		},
			{
			xtype: 'dataview',
			scrollable: true,
			inline: true,
			//cls: 'dataview-inline',
			baseCls: 'rd-tiled-view',//'my-dataview',
			//itemCls: 'my-dataview-item',
			itemTpl: new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="productItem">',
                        '<img src="{photo}" />',
       
                    '</div>',
                '</tpl>'
            ),
			store: 'mySpeakers',
			
		 }],
		listeners: [{
			delegate: '#logOffButton',
			event: 'tap',
			fn: 'onLogOffButtonTap'
		}]
	},
	onLogOffButtonTap: function () {
		this.fireEvent('onSignOffCommand');
	}
});
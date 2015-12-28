Ext.setup({
    onReady: function () {
        Ext.Viewport.add({
            xtype: 'container',
            defaults: {
                margin: 20,
                padding: 20
            },
            layout: 'card',
            items: [{
                xtype: 'grid',
                requires: ['Ext.grid.Grid',
                           'Ext.grid.HeaderGroup',
                           'Ext.grid.plugin.Editable',
                           'Ext.grid.plugin.ViewOptions',
                           'Ext.grid.plugin.MultiSelection',
                           'Ext.grid.plugin.ColumnResizing',
                           'Ext.grid.plugin.SummaryRow'
                          ],
                store: {
                    fields: ['company', 'sales', 'grossprofit', 'something', 'somethingtwo', 'thing3'],
                    data: [{
                        company: '3m Co',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Exxon',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Frito Lay',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Del Taco',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Coca Cola',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Exxon',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Frito Lay',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Del Taco',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Coca Cola',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Exxon',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Frito Lay',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Del Taco',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }, {
                        company: 'Coca Cola',
                        sales: '000.00',
                        grossprofit: '000.00',
                        something: 'xxxxxx',
                        somethingtwo: 'xxxxxx',
                        thing3: '$123456.12'
                    }]
                },
                //width: '100%',
                title: 'Grid Example Sencha Touch 2.3',
                headerContainer: {
                    height: 65
                },
                itemHeight: 60,
                columns: [{
                    text: 'Company',
                    dataIndex: 'company',
                    width: 150
                }, {
                    text: 'Sales',
                    dataIndex: 'sales',
                    width: 150
                }, {
                    text: 'Gross Profit',
                    dataIndex: 'grossprofit',
                    width: 150
                }, {
                    text: 'Something',
                    dataIndex: 'something',
                    width: 150
                }, {
                    text: 'Something Two',
                    dataIndex: 'somethingtwo',
                    width: 150
                }, {
                    text: 'Thing 3',
                    dataIndex: 'thing3',
                    width: 150
                }]
            }]
        });
    }
});
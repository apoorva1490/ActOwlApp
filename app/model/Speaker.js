Ext.define('Sample.model.Speaker', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'firstName', type: 'string' },
            { name: 'lastName', type: 'string' },
            { name: 'photo', type: 'auto'}
        ]
    }
});
Ext.define('Sample.store.Speakers', {
	extend: 'Ext.data.Store',
	config: {
		data: [
		        { firstName: 'Racket', lastName: 'Barry', photo: 'images/racket.PNG'},
		        { firstName: 'Arcade', lastName: 'Lemmons', photo: 'images/arcade.PNG'},
		        { firstName: 'Track',lastName: 'Simoens', photo: 'images/track.PNG'},
		        { firstName: 'Dance', lastName: 'Mosby', photo: 'images/dance.PNG' },
		    	{ firstName: 'Water', lastName: 'Mosby' , photo: 'images/water.PNG'},
		    	{ firstName: 'Ball', lastName: 'Mosby', photo: 'images/ball.PNG' }
		    	],
		storeId: 'mySpeakers',
		model: 'Sample.model.Speaker',
	    autoLoad: true
	}    
});
function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});

	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:'update map',
		top:10
	});
	
	var coordsLabel = Ti.UI.createLabel({
		text:'Test',
		color: 'black',
		height: 44,
		width: 400,
		top: 20,
		left:10,
	});
	
	startLat = 0;
	startLong = 0;
	
	Titanium.Geolocation.getCurrentPosition(function(e)
			{
				if (e.error)
			{
	                // manage the error
	                return;
			}
			
			
	 
			var longitude = e.coords.longitude;
			var latitude = e.coords.latitude;
			var altitude = e.coords.altitude;
			var heading = e.coords.heading;
			var accuracy = e.coords.accuracy;
			var speed = e.coords.speed;
			var timestamp = e.coords.timestamp;
			var altitudeAccuracy = e.coords.altitudeAccuracy;
	 		
	 		coordsLabel.text = longitude+','+latitude;
	 
	 		startLat = latitude;
	 		startLong = longitude;
	 
	                // we use the above data the way we need it
		
		
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		// self.containingTab.open(Ti.UI.createWindow({
			// title: L('newWindow'),
			// backgroundColor: 'white'
		// }));
	});

	var map = Titanium.Map.createView({
    	mapType: Titanium.Map.STANDARD_TYPE,
    	region: {
      		latitude:startLat,
      		longitude:startLong,
      		latitudeDelta:0.01,
      		longitudeDelta:0.01
    	},
    	animate:true,
    	regionFit:false,
    	userLocation:false,
    	top: 80
  	});
	
	Titanium.Geolocation.purpose = "GPS user coordinates";
	
	 // set the granularity of the location event
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 0;
  
  	if (Titanium.Geolocation.locationServicesEnabled === false)
	{
		Titanium.UI.createAlertDialog({title:'Amazing Race', message:'Your device has geo turned off - turn it on.'}).show();
	}
  
	Titanium.Geolocation.addEventListener('location',function(e)
	{
		if (e.error)
		{
                // manage the error
		return;
		}
 
		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		Ti.API.info("Logitude: "+longitude);
		Ti.API.info("Latitude: "+latitude);
		Ti.API.info("Accuracy: "+accuracy);
		Ti.API.info("Speed: "+speed);
		
		// south east
		//-31.979894, 115.895730
		// north east
		// -31.979780, 115.895596
		// north west
		// -31.979885, 115.895486
		// south west
		// -31.980008, 115.895652
		//15.8961367, -31.97976
		// lat then long
		if (latitude >= -31.980008  && latitude <= -31.979780 ) {
			if (longitude >= 115.895486 && longitude <= 115.895730) {
				alert('you are on the road!');
			}
		}
		
		
		
		coordsLabel.text = latitude+','+longitude;
		
		var pin = Titanium.Map.createAnnotation({
			latitude:latitude,
			longitude:longitude,
			title:latitude+" , "+longitude,
			pincolor:Titanium.Map.ANNOTATION_GREEN,
			animate:true,
		});
		
		map.addAnnotation(pin);
		
		
		//alert('polling now');
 		//alert('Getting location! '+longitude+' , '+latitude);
               // again we use the gathered data
     });
	
	//self.add(button);
	self.add(coordsLabel);
	self.add(map);
	

	button.addEventListener('click', function() {
		
		Titanium.Geolocation.getCurrentPosition(function(e)
			{
				if (e.error)
			{
	                // manage the error
	                return;
			}
	 
			var longitude = e.coords.longitude;
			var latitude = e.coords.latitude;
			var altitude = e.coords.altitude;
			var heading = e.coords.heading;
			var accuracy = e.coords.accuracy;
			var speed = e.coords.speed;
			var timestamp = e.coords.timestamp;
			var altitudeAccuracy = e.coords.altitudeAccuracy;
	 		
	 		
	 
	                // we use the above data the way we need it
		});
		
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		// self.containingTab.open(Ti.UI.createWindow({
			// title: L('newWindow'),
			// backgroundColor: 'white'
		// }));
	});

	return self;
};

module.exports = ApplicationWindow;

//** JavaScript for Google Maps **//

var Zn_google_map = function (mapCanvasId, ourLocation, routingColor, locations, mapTypeId, zoom, scrollwheel, customStyle, customStyleActive, show_overview, show_streetview, show_maptype) {

	//** Set this properties before initializing the map
	this.mapCanvasId = mapCanvasId || '';
	this.ourLocation = ourLocation ? new google.maps.LatLng(ourLocation[0], ourLocation[1]) : new google.maps.LatLng(41.447390, -72.843868); //** [lat,long]
	this.routingColor = routingColor || '#FF0000';
	this.locations = locations || [[41.447390, -72.843868, '<p>CleanLab</p>']]; //** [lat, long, tooltip, icon, size, animation, anchor]
	this.zoom = zoom || 17;
	this.mapTypeId = mapTypeId ? (mapTypeId.toUpperCase() === 'SATELLITE' ? google.maps.MapTypeId.SATELLITE : (mapTypeId.toUpperCase() === 'HYBRID' ? google.maps.MapTypeId.HYBRID : (mapTypeId.toUpperCase() === 'TERRAIN' ? google.maps.MapTypeId.TERRAIN : google.maps.MapTypeId.ROADMAP))) : google.maps.MapTypeId.ROADMAP;
	this.scrollwheel = scrollwheel || false;
	this.show_overview = show_overview || false;
	this.show_streetview = show_streetview || false;
	this.show_maptype = show_maptype || false;


	//** This properties are standard for all maps
	//this.mapStyleLight = [{ stylers: [{ lightness: 30 }] }, { elementType: 'labels', stylers: [{ lightness: 30 }] }];
	//this.mapStyleNormal = [{ stylers: [{ lightness: 0 }] }, { elementType: 'labels', stylers: [{ lightness: 0 }] }];

	// Map Color Scheme - more styles here http://snazzymaps.com/
	this.normalMapStyle = customStyle || false;
	this.activeMapStyle = customStyleActive || false;

	this.directionsDisplay;
	this.directionsService = new google.maps.DirectionsService();
	this.map;
	this.isMobile = ('ontouchstart' in window);
}

Zn_google_map.prototype.init_map = function () {
	var that = this;
	//** Set the options for the map
	var myOptions = {
		zoom: 7,
		center: this.ourLocation,
		mapTypeId: this.mapTypeId,
		scrollwheel: this.scrollwheel,
		noClear: true,
		mapTypeControl: this.show_maptype,
		streetViewControl: this.show_streetview,
		panControl: this.isMobile,
		panControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER },
		draggable: !this.isMobile,
		scaleControl: false,
		overviewMapControl: this.show_overview,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		//** Make the map lighter
		styles: this.normalMapStyle
	};
	//** Define the map
	this.map = new google.maps.Map(document.getElementById(this.mapCanvasId), myOptions);
	this.directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: this.routingColor } });//({ suppressMarkers: true });

	//** Add the markers to the map [[lat, long, tooltip, icon, size, animation, anchor],...]
	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(infowindow, 'closeclick', function () { that.map.setOptions({ styles: that.normalMapStyle }); });
	var marker, i;
	for (i = 0; i < this.locations.length; i++) {
		marker = new google.maps.Marker({
			map: this.map,
			position: new google.maps.LatLng(this.locations[i][0], this.locations[i][1]),
			icon: this.locations[i][3] || null,
			size: this.locations[i][4] || null,
			anchor: this.locations[i][6] || null,
			animation: this.locations[i][5] ? (this.locations[i][5].toUpperCase() === 'BOUNCE' ? google.maps.Animation.BOUNCE : (this.locations[i][5].toUpperCase() === 'DROP' ? google.maps.Animation.DROP : null)) : null
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				if( typeof that.locations[i][2] != 'undefined' && that.locations[i][2].length > 0 ){
					infowindow.setContent(that.locations[i][2]);
					infowindow.open(that.map, marker);
					that.map.setOptions({ styles: that.activeMapStyle });
				}

			}
		})(marker, i));


	}


	var currCenter = this.map.getCenter();
	window.onresize = function(event) {
		google.maps.event.trigger(that.map, 'resize');
		that.map.setCenter(currCenter);
	}



	//** If having the startLocation container, add event to <ENTER>
	if (this.findChildByClass('zn_startLocation')) {
		var that = this;
		this.findChildByClass('zn_startLocation').onkeydown = function (event) { if (event.keyCode == 13) that.calcRoute(); };
	}

	//** If having removeRoute element, add event on click
	if (this.findChildByClass('zn_removeRoute')) {
		var that = this;
		this.findChildByClass('zn_removeRoute').onclick = function () { that.removeRoute(); };
	}



};
//** Load the map
//google.maps.event.addDomListener(window, 'load', init_map);

//** Calculate route based on the address
Zn_google_map.prototype.calcRoute = function () {
	var that = this;
	var start = this.findChildByClass('zn_startLocation').value;
	var end = this.ourLocation;
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode.DRIVING
	};
	this.directionsService.route(request, function (response, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			//** Apply some styling classes
			that.findChildByClass('zn_startLocation').classList.remove('startLocationInvalid');
			that.findChildByClass('zn_visitUsContainer').classList.add('startLocationNotEmpty');
			//** Show directions on the map and zoom to their bounding box
			that.directionsDisplay.polylineOptions.strokeColor = that.routingColor;
			that.directionsDisplay.setMap(that.map);
			that.directionsDisplay.setDirections(response);
			//** Supress the destination marker
			//directionsDisplay.b.markers[1].setMap(null);
		}
		else {
			//** Style the input box
			that.findChildByClass('zn_visitUsContainer').classList.add('startLocationNotEmpty');
			that.findChildByClass('zn_startLocation').classList.add('startLocationInvalid');
		}
	});
}

Zn_google_map.prototype.removeRoute = function () {
	//** Remove the directions from the map and zoom back to our office
	this.directionsDisplay.setMap(null);
	this.map.setCenter(this.ourLocation);
	// this.map.setZoom(this.zoom);
	this.map.setZoom(this.zoom);
	this.findChildByClass('zn_startLocation').value = '0';
	this.findChildByClass('zn_startLocation').classList.remove('startLocationInvalid');
	this.findChildByClass('zn_visitUsContainer').classList.remove('startLocationNotEmpty');
}

Zn_google_map.prototype.findChildByClass = function (myClassName, parent) {
	//** Search for visit us from element and icon_close element
	var children = document.getElementById(parent || this.mapCanvasId).getElementsByTagName('*');
	for (child in children)
		if ((' ' + children[child].className + ' ').indexOf(' ' + myClassName + ' ') > -1) { return children[child]; }

	return null;
}


// pengD
$(function($) {
	    var zn_google_map_eluidceee223b = new Zn_google_map('zn_google_map_eluidceee223b',
	    	[14.555878, 121.002698],'', [
	    	[14.555878, 121.002698, '<p>Frederick Bldg, Sen. Gil J. Puyat Ave, Makati</p>', 'img/icon/map-marker.png', 20, 'DROP', ], 
	    	[16.379485, 120.619571, '<p>Ground Floor PEZA Admin Building, Loakan Road, Baguio City Economic Zone, Baguio</p>', 'img/icon/map-marker.png', 40, 'DROP', ], 
	    	[14.561353, 121.018722, '<p>316 Sen Gil Puyat Avenue Extension, Makati</p>', 'img/icon/map-marker.png', 40, 'DROP', ], 
	    	[14.656762, 120.983134, '<p>Araneta Square Mall, Samson Road, Bonifacio Monumento Circle Caloocan, Caloocan</p>', 'img/icon/map-marker.png', 40, 'DROP', ],
	    	[14.582281, 121.060801, '<p>Unit 203, Pacific Place Condominium, Pearl Drive, Pasig</p>', 'img/icon/map-marker.png', 40, 'DROP', ],
	    	],
    	'ROADMAP',14,false,[{
	        "featureType": "landscape", "stylers": [{"saturation": -100 }, {"lightness": 60 }] }, {"featureType": "road.local", "stylers": [{"saturation": -100 }, {"lightness": 40 }, {"visibility": "on"}] }, {"featureType": "transit", "stylers": [{"saturation": -100 }, {"visibility": "simplified"}] }, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}] }, {"featureType": "water", "stylers": [{"visibility": "on"}, {"lightness": 30 }] }, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ef8c25"}, {"lightness": 40 }] }, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}] }, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"color": "#b6c54c"}, {"lightness": 40 }, {"saturation": -40 }] }, []],[{"featureType": "landscape", "stylers": [{"saturation": -100 }, {"lightness": 60 }] }, {"featureType": "road.local", "stylers": [{"saturation": -100 }, {"lightness": 40 }, {"visibility": "on"}] }, {"featureType": "transit", "stylers": [{"saturation": -100 }, {"visibility": "simplified"}] }, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}] }, {"featureType": "water", "stylers": [{"visibility": "on"}, {"lightness": 30 }] }, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ef8c25"}, {"lightness": 40 }] }, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}] }, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"color": "#b6c54c"}, {"lightness": 40 }, {"saturation": -40 }] }, []],false,false,false); zn_google_map_eluidceee223b.init_map();


	    // toggle panel
	    $('.kl-contentmaps__panel-tgg').on('click', function(e) {
	        e.preventDefault();
	        $(this).toggleClass('is-toggled');
	        $(this).parent().toggleClass('is-closed');
	    });
	    // magnific-popup
	    $('.kl-contentmaps__panel-img').magnificPopup({
	        type: 'image'
	    });
	});
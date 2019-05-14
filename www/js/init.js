var icon_w = 10;
var icon_h = 10;

var redIcon = L.icon({
	iconUrl: 'imgs/red.png',
	shadowUrl: '',
	iconSize: [icon_w, icon_h]
});

var map = L.map('map', {
	crs: L.CRS.Simple
	,inZoom: -5
	,minZoom: 0 
    ,maxZoom: 2
});

var img = new Image();
var height = img.height;
var width = img.width;
img.src = 'leiautes/terreo.png';

img.onload = function(){
	height = img.height;
	width = img.width;
	
	console.log(height, width);
}

console.log(height, width);

var bounds = [[0,0], [501,1651]];
var image = L.imageOverlay('leiautes/terreo.png', bounds).addTo(map);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

map.fitBounds(bounds);

var theMarker = undefined;

  map.on('click',function(e){
	lat = e.latlng.lat;
	lon = e.latlng.lng;
	
	redIcon = L.icon({
		iconUrl: 'imgs/red.png',
		shadowUrl: '',
		iconSize: [icon_w, icon_h]
	});

	console.log("You clicked the map at LAT: "+ lat+" and LONG: "+lon );
		//Clear existing marker, 

		if (theMarker != undefined) {
			  map.removeLayer(theMarker);
		};

	//Add a marker to show where you clicked.
	theMarker = L.marker([lat,lon], {icon: redIcon, draggable: true}).addTo(map);  
});

map.on('zoomend', function() {
    var currentZoom = map.getZoom();

    //Update X and Y based on zoom level
    icon_h = 10 + (currentZoom*1); //Update x 
    icon_w = 10 + (currentZoom*1); //Update Y

	icon_h =  Math.pow(10, currentZoom+1);    
	icon_w =  Math.pow(10, currentZoom+1);    
	
	console.log(currentZoom, icon_w, icon_h);
	
    var LeafIcon = L.icon({
        
			iconUrl: 'imgs/red.png',
			shadowUrl: '',
            iconSize: [icon_w, icon_h] // Change icon size according to zoom level
        
    });
	
	if (theMarker != undefined) {
		theMarker.setIcon(LeafIcon);
	}
});

(function($){
  $(function(){

    $('.sidenav').sidenav();
	$('.tabs').tabs({swipeable: false});
	$('.modal').modal();
  }); // end of document ready
})(jQuery); // end of jQuery name space

function IniciarVistoria() {
	$('.exibe_na_vistoria').removeClass('hide');
	$('.esconde_na_vistoria').addClass('hide');
}

function FinalizarVistoria() {
	$('.exibe_na_vistoria').addClass('hide');
	$('.esconde_na_vistoria').removeClass('hide');
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


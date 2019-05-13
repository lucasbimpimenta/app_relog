(function($){
  $(function(){

    $('.sidenav').sidenav();
	$('.tabs').tabs({swipeable: false});
	$('.modal').modal();
	
	init();

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



var canvas;
var canvasWidth;
var ctx;

function init() {
	canvas = document.getElementById('mycanvas');
	if (canvas.getContext) {
	  ctx = canvas.getContext("2d");

	  window.addEventListener('resize', resizeCanvas, false);
	  window.addEventListener('orientationchange', resizeCanvas, false);
	  resizeCanvas();
	}
	
	var img = new Image();
	img.src = 'leiautes/terreo.png';
	
	img.onload = function() {
		//Draw the image on the canvas
		ctx.drawImage(img, 0, 0);
	}
}

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
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

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


/*
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
*/


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

var canvas = new fabric.Canvas('canvas');
var HideControls = {
            'tl':true,
            'tr':false,
            'bl':true,
            'br':true,
            'ml':true,
            'mt':true,
            'mr':true,
            'mb':true,
            'mtr':true
        };
		
fabric.Image.fromURL('imgs/seta_vermelha.png', function (img) {
    img.top = 60;
    img.left = 30;
    img.setControlsVisibility(HideControls);
    canvas.add(img);
});

canvas.renderAll();

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);
canvas.renderAll();
}

// resize on init
resizeCanvas();

function addDeleteBtn(x, y){
    $(".deleteBtn").remove(); 
    var btnLeft = x-10;
    var btnTop = y-10;
    var deleteBtn = '<img src="imgs/remove.png" class="deleteBtn" style="position:absolute;top:'+btnTop+'px;left:'+btnLeft+'px;cursor:pointer;width:20px;height:20px;"/>';
    $(".canvas-container").append(deleteBtn);
}

canvas.on('object:selected',function(e){
        addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
});

canvas.on('mouse:down',function(e){
    if(!canvas.getActiveObject())
    {
        $(".deleteBtn").remove(); 
    }
});

canvas.on('object:modified',function(e){
    addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
});

canvas.on('object:scaling',function(e){
    $(".deleteBtn").remove(); 
});
canvas.on('object:moving',function(e){
    $(".deleteBtn").remove(); 
});
canvas.on('object:rotating',function(e){
    $(".deleteBtn").remove(); 
});
$(document).on('click',".deleteBtn",function(){
    if(canvas.getActiveObject())
    {
        canvas.remove(canvas.getActiveObject());
        $(".deleteBtn").remove();
    }
});

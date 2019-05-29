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


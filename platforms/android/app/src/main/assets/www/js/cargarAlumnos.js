$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

	var output = $('#output');
	console.log("load php");
	$.ajax({
		url: 'http://programa2.com.co/tallerPhonegap/index.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){

			$.each(data, function(i,item){ 
				var landmark = '<b>Codigo: </b>'+item.idAlumno+"<br>"
				+ '<p><b>Nombre: </b>'+item.nombre+'<br>'
				+ "<b>Direccion: </b>"+item.direccion+'</p> <hr>';
			
				output.append(landmark);
			});
			
			//"SELECT id, idAlumno, nombre, direccion FROM alumnos ORDER BY nombre"; 
		},
error: function(err, textStatus, errorThrown) {
                 output.text("There was an error [" + textStatus + "] loading the data.");
                 console.log(err);
                 console.log(errorThrown);
              } 
	});
});
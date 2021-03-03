$(document).ready(function(){

	
	$('#myForm').submit(function(event){
		event.preventDefault()
		var laVille=$('#ville').val()
		var maCountry=$('#country').val()
		var urlMeteo="http://api.openweathermap.org/data/2.5/weather?q=%ville%,%country%&appid=096a8cc64fcbfc5831847a29428d0623&units=metric&lang=FR"




		if (laVille=="" || country=="") {
			alert("rempli les champs")
		}else {
			var text=urlMeteo
			text=text.replace(/%ville%/g, laVille)
			text=text.replace(/%country%/g, maCountry)
		$.get(text, function(data){
				console.log(data) // on recupere le tableau json
				$('#affichage').text(data.main.temp+"°C")
		})

			

		}

	})


				
})
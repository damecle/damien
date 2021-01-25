$(document).ready(function(){

	if (!localStorage.getItem('ampoule')) {
		$('#AE').attr('src',"images/ampouleE.jpg")
	}else {
		$('#AE').attr('src',localStorage.getItem('ampoule'))
	}



	$('#AE').click(function(){


		if ($(this).attr('src')=="images/ampouleE.jpg") {

			$(this).attr('src',"images/ampouleA.jpg")
		
		}
		else{
			$(this).attr('src',"images/ampouleE.jpg")
		}
		localStorage.setItem('ampoule',$(this).attr('src'))
	})

		


})	
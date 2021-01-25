$(document).ready(function(){

//.................................................................

//variables
var userObj



//chargement LS
	if (!localStorage.getItem('user')){
			userObj={'infos':[]}
		}else {
			userObj=JSON.parse(localStorage.getItem('user'))

			}
//on gere les forms
     //Form1...................................
	$('#myForm').submit(function (event) {
		var valEmail1=$('input[name=email1]').val()
		var valMdp1=$('input[name=mdp1]').val()
			 if ((valEmail1=='') || (valMdp1=="")) {

	       	
	       	event.preventDefault()
	       	alert("un ou plusieurs champs non remplis") //possible de remplacer par required

	       } else {
	       	
	       		if ((valEmail1 !== localStorage.getItem('infos')) && (valMdp1 !== localStorage.getItem('infos'))) {
	       			event.preventDefault()
	       			alert("Email ou mot de passe incorrect")
	       		}

	     	

	       
	      }  //celui du else  
	})

	//forme2............................................
	$('#myForm2').submit(function (event) {
		var valEmail2=$('input[name=email2]').val()
		var valMdp2=$('input[name=mdp2]').val()
			var valPseudo=$('input[name=pseudo]').val()

		 if ((valEmail2=="") || (valMdp2=="") || (valPseudo==""))  {

	       	alert("condition non respecter")
	       	event.preventDefault()
	       	console.log('valEmail2')
	       	console.log('valMdp2')
	       	console.log('valPseudo')

	       } else {

	       	var id

	       	if (userObj.infos.length ==0) {
	       		id=1
	       	}else {
	       		id=userObj.infos[userObj.infos.length-1].id+1
	       	}
	       	$('input[name=email2]').val()
	       	$('input[name=mdp2]').val()
	       	$('input[name=pseudo]').val()
	       	var infosObj={
	       		id: id,
	       		email: valEmail2,
	       		mdp: valMdp2,
	       		pseudo: valPseudo
	       	}
	       	userObj.infos.push(infosObj)
	       	localStorage.setItem('user',JSON.stringify(userObj))
	       
	      }  //celui du else  
	})

		
		










//..........................................................		
	
})
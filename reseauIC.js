$(document).ready(function(){

//.................................................................


//variables
var userObj



//chargement LS
	if (!localStorage.getItem('user')){
			userObj={'infos':[]} //si la valeur est false, il se crée
		}else {
			userObj=JSON.parse(localStorage.getItem('user')) //sinon il récupère le tableau à chaque chargement

			}
//on gere les forms
     //Form1...................................
	$('#myForm').submit(function (event) {
	    event.preventDefault()

		var valEmail1=$('input[name=email1]').val()
		var valMdp1=$('input[name=mdp1]').val()

		if ((valEmail1=='') || (valMdp1=="")) {
	       	alert("un ou plusieurs champs non remplis") //possible de remplacer par required
	    } 
	    else {
       		var loginMatch = false
	    	
       		for(var x=0; x<userObj.infos.length; x++){ //boucle pour rechercher dans le tableau une information
       			let info = userObj.infos[x] //il va s'arreter sur la meme ligne, sur le user actuel
       			let mdpInfo=info.mdp //sur la ligne on spécifie l'info qu'on veut avoir
       			let emailInfo=info.email

       			if (emailInfo == valEmail1) {
	       			if (mdpInfo == valMdp1) {
	       				loginMatch = true
	       				saveSession("user",info)// info=user actuel
	       				window.location.href = "monReseau.html"// redirige vers la page qu'on a bloqué avec le "event.preventdefault"
	       				//alors c'est le bon user puisqu'il a le combo email/mdp
	       				
	       				break; //mettre le break a la fin car il arrete la boucle et ne lit pas la suite (arrete le sript aussi)
	       			}
	       		}
	       		
	       	}
	       		
       		if (!loginMatch) { //pas de else à la suite, cela evite la boucle avec le message qui s'affiche plusieurs fois

				alert("Email ou mot de passe incorrect")
       		}
   		}	
	})

	//forme2............................................
	$('#myForm2').submit(function (event) {
	    event.preventDefault()
		var valEmail2=$('input[name=email2]').val()
		var valMdp2=$('input[name=mdp2]').val()
		var valPseudo=$('input[name=pseudo]').val()

		 if ((valEmail2=="") || (valMdp2=="") || (valPseudo==""))  {

	       	alert("condition non respecter")


	       } else {  

	       		var erreurEmail = false;
	       		var erreurPseudo = false;

	       		for(var i=0; i<userObj.infos.length; i++){ //tant que i est plus petit que la longueur du tableau, alors on acrémente de 1
		       		var info = userObj.infos[i] //on recherche dans le tableau infos, sauf que infos est traduit dans le js en obj=> userObj qu'on définit plus haut
		       		if (info.email==valEmail2) {
		       			alert("email existe deja")
		       			erreurEmail = true;
		       			break;
		       			
		       		}
		       		if (info.pseudo==valPseudo) {
		       			alert("pseudo existe deja")
		       			erreurPseudo = true
		       			break;
		       			
	       			} 
	       		}//for
	       
				if (erreurPseudo == false && erreurEmail == false) {

				infosUser(valPseudo,valEmail2,valMdp2) //ma fonction plus bas => definit l'id, les valeurs, les remets vide et la pousse sur le LS
			    save("user",userObj) // fonction qui save les changement dans mon LS
			    saveSession("user",userObj)
			    window.location.href = "monReseau.html"
				 }
	       
	      	}  //celui du else 
	}) //end submit form2
	      	//Les fonctions form2
	     	function save(key,valueObj){
				localStorage.setItem(key,JSON.stringify(valueObj))
			} 
			function saveSession(key,valueObj){
				sessionStorage.setItem(key,JSON.stringify(valueObj))
			}

			function infosUser(pseudoA,emailA,mdpA){
				var id
				if (userObj.infos.length ==0) {//on donne un ID à chaque entrer d'infos dans le tableau
		       		id=1
		       	}
		       	else {
		       		id=userObj.infos[userObj.infos.length-1].id+1
		       	}

				var infosObj={ //les infos qui vont apparaitre dans mon tableau de LS
		       		id: id,
		       		email: emailA,
		       		mdp: mdpA,
		       		pseudo: pseudoA
		       	}
				
		       	$('input[name=email2]').val("") //remet les valeurs vide
		       	$('input[name=mdp2]').val("")
		       	$('input[name=pseudo]').val("")

		       	userObj.infos.push(infosObj)// on pousse les infosObj dans le tableau du LS
		       	saveSession("user", infosObj) //infosOb=user actuel
			}


		
		










//..........................................................		
	
})
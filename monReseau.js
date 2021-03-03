$(document).ready(function() {
    //..................................................
    var postsObj

    //chargement du LS
    if (!localStorage.getItem('publish')) {
        postsObj = {
            'posts': []
        } //si la valeur est false, il se crée
    } else {
        postsObj = JSON.parse(localStorage.getItem('publish')) //sinon il récupère le tableau à chaque chargement
    }
    //recup des post
    affichageLast()
   

    //click publier
    $('#form3').submit(function(event) {
        event.preventDefault()
        var timestamp = Date.now() //recupere le timestamp
        var dateNow = new Date(timestamp) //traduit le timestamp sous forme de date 
        var messageVal = $('#message').val()
        var fileVal = img()

        //var auteur=auteur()

        if (messageVal == "") {
            alert("tu as oublié ton message")
        } else {
            lePost(messageVal, dateNow, fileVal)
            save("publish", postsObj)
            affichageNew(messageVal, fileVal)



        }




    }) //submit publier


    //les fcts
    function lePost(contenuP, dateP, imgP) {
        var id
        if (postsObj.posts.length == 0) {
            id = 1
        } else {
            id = postsObj.posts[postsObj.posts.length - 1].id + 1
        }
        var paramObj = {

            id: id,
            auteur: 'auteurP',
            contenu: contenuP,
            date: dateP,
            img: imgP,
            like: [],
            com: []

        }

        var messageVal = $('#message').val("")
        var fileVal = $('#file').val("")
        postsObj.posts.push(paramObj)
    }

    function auteur(id) {
        userObj = JSON.parse(localStorage.getItem('user'))
        for (var z = 0; z < userObj.infos.length; z++) {
            let info = userObj.infos[z]

            if (id == info.id) {
                return (info.pseudo)
            }
        } //for
    }

    function img() {
        var image = $('#file').val()
        if (image == "") {
            return ('')
        } else {
            return (image)
        }
    }

    function affichageNew(valueM, valueImg) {

        $('#leMur').prepend(`
				<form action="monReseau.html" id="form4">
					<p>"${valueM}"</p>
					<img src="${valueImg}" alt="${valueImg}">
					<div id='poster'>
						<input type="button" name="like" value="like" class="like">
						<input type="submit" name="comment" value="commenter" id="comment" >
						<div></div>
					</div>
					<div id='lesComs'></div>
				</form>
				`)
        if (valueImg == '') {
            $('#form4').children('img').hide()

            leCom()
        }
    }

    function affichageLast() {
        for (var x = 0; x < postsObj.posts.length; x++) {
            let post = postsObj.posts[x]
            let coom = post.contenu
            let imgg = post.img
            let idd = post.id
            $('#leMur').prepend(`
				<form action="monReseau.html" id="form-com-${idd}">
					<p>"${coom}"</p>
					<img src="${imgg}" alt="${imgg}">
					<div id='poster'>
						<input type="button" name="like" value="like" class="like" data-id="${post.id}">
						<input type="button" name="comment" value="commenter" id="comment" data-id="${post.id}">
						<div id='lesBtn'></div>
					</div>
					<div id='lesComs${idd}'></div>
				</form>
		`)
            leCom(post)
            affichageLike(post)
        }
    }
    //phase d'affichage du btn et textarea commentaire
    function leCom(post) {
        $('#comment').on("click", function() {
            var comm = $('.commentaire').val()
            var idDuCom = $(this).attr('data-id')
            if (idDuCom == post.id) {

                if ($('#cadreText' + post.id).length == 0) { //si vide affiche le cadre text com sinon il l'enleve
                    $(this).parent().children('div').append(`
				<textarea  name="commentaire" placeholder="commente ici" class='commentaire' id='cadreText${idDuCom}'></textarea>
				<input type="submit" name="valideCom" value="valider" id='validation'>
			`)
                    affichCom(comm, post, idDuCom)

                } else {
                    $('#cadreText' + idDuCom).remove()
                    $('#validation').remove()
                }
                console.log(comm)
            }
        })
    }
    //affichage du commentaire
    function affichCom(valeurCom, post, idCom) { //?
        $('#form-com-' + post.id).submit(function(event) {
            event.preventDefault()

            if (valeurCom == "") {
                alert('rempli ton champ commentaire')
            } else {
                $('#lesComs' + idCom).prepend(`<p>${valeurCom}</p>`)
                $('input[name=commentaire]').val("")
                $('#cadreText' + idCom).remove()
                $('#validation').remove()

            }
        })
    }

    function affichageLike(post) {
        $('.like').on("click", function() {
            var idDuLike = $(this).attr('data-id')
            if (idDuLike == post.id) {

                var likeObj = {


                    auteur: 'auteurP',


                }

                post.like.push(likeObj)

            }

        })
    }

    //function getPostIndex by postId
    function postId(param){
        for (var x = 0; x < postsObj.posts.length; x++) {
            let post = postsObj.posts[x]
            var odd=post.param
        }
    }
    //function getUser ID by name
        function auteur(param){
            auteurObj = JSON.parse(sessionStorage.getItem('user'))
            auteurObj.param.val()
        }

    //fonction génération UUId que je n'utilise pas ici
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }


    //fct save
    function save(key, valueObj) {
        localStorage.setItem(key, JSON.stringify(valueObj))
    }




    /*var paramObj={ 
    				posts:[{
    							id:,
    							contenu:,
    							date:,
    							img:
    						}
    					  ],
    				likes:[],
    				coms:[ {
    							id:,
    							date:,
    							content:
    						}
    					 ]
    	       	 }*/




    //........................................................
})
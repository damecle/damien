$(document).ready(function(){

        $('.img-thumbnail').click(function () {
            $('.overlay').show()
            //attr()
            //peut prend 1 oU 2 Params
            //SI 1 seul param => Retourne la valeur
            //Si 2 params => Change la valeur
            $('.img-full').attr("src", $(this).attr('src'))
        })
        $('.closeMe').click(function () {
            $('.overlay').hide()
        })
        $(document).keydown(function (event) {
            if (event.keyCode == 27){
                $('.overlay').hide()
            }
        })
    })





$(window).on('load', function(){
    
    $('.modal-trigger').click(function(e){
        $('.bg-modal').fadeIn();
        $('.modal').fadeIn();

        e.stopPropagation();
    })

    $('.close-modal').click(function(){
        $('.bg-modal').fadeOut();
        $('.modal').fadeOut();
    });

    $("body").click(function() {
        if ($(".modal").is(":visible")) {
            $('.bg-modal').fadeOut();
            $('.modal').fadeOut();
        }
     });

    $(".modal").click(function(e){
        e.stopPropagation();
    })

});
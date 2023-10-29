$(window).on('load', function(){
    
    // Inicializando MaterializeJS
    M.AutoInit();

    
    
    
    let $elementoContato = $('.contato-follow');

    if(window.innerWidth > 730){
        
        $(window).scroll(function(){

            verificaHeightDesktop($(window).scrollTop())
    
        });
        
    }
    
    if(window.innerWidth <= 730){

        $(window).scroll(function(){

            verificaHeight($(window).scrollTop());

        });
    }


    // Ativando função ao redimensionar tela
    $(window).resize(function(){
        if(window.innerWidth > 730){

            $(window).scroll(function(){
    
                verificaHeightDesktop($(window).scrollTop())
                
            });
            
        }
        
        if(window.innerWidth <= 730){
    
            $(window).scroll(function(){
    
                verificaHeight($(window).scrollTop());
    
            });
        }
    });
    // ~~~~


    function verificaHeightDesktop(height){
        if(height > 1500){
            $elementoContato.css({
                bottom: '50%',
                right: 0,
                transition : '0.5s ease-in-out'
            }, 500);
        }else{
            $elementoContato.css({
                bottom: '50%',
                right: -150,
                transition : '0.5s ease-in-out'
            }, 500);
        }
    };

    function verificaHeight(height){
        if(height > 1500){
            $elementoContato.css({
                right: 0,
                bottom: 0,
                transition : '0.5s ease-in-out'
            }, 500);
        }else{
            $elementoContato.css({
                right: 0,
                bottom: -150,
                transition : '0.5s ease-in-out'
            }, 500);
        }
    };
    
    

    //TABS APARTAMENTOS
    $('#front-slider-txt').css({
        display: 'block',
    })
    $('#front-garden-slider-txt').css({
        display: 'none',
    })
    $('#coast-slider-txt').css({
        display: 'none',
    })
    $('#coast-garden-slider-txt').css({
        display: 'none',
    })


    $('a[href="#front-slider"]').click(function(){
        $('#front-slider-txt').css({
            display: 'block',
        })

        $('#front-garden-slider-txt').css({
            display: 'none',
        })
        $('#coast-slider-txt').css({
            display: 'none',
        })
        $('#coast-garden-slider-txt').css({
            display: 'none',
        })
    })

    $('a[href="#front-garden-slider"]').click(function(){
        $('#front-garden-slider-txt').css({
            display: 'block',
        })

        $('#front-slider-txt').css({
            display: 'none',
        })
        $('#coast-slider-txt').css({
            display: 'none',
        })
        $('#coast-garden-slider-txt').css({
            display: 'none',
        })
    })

    $('a[href="#coast-slider"]').click(function(){
        $('#coast-slider-txt').css({
            display: 'block',
        })

        $('#front-garden-slider-txt').css({
            display: 'none',
        })
        $('#front-slider-txt').css({
            display: 'none',
        })
        $('#coast-garden-slider-txt').css({
            display: 'none',
        })
    })

    $('a[href="#coast-garden-slider"]').click(function(){
        $('#coast-garden-slider-txt').css({
            display: 'block',
        })

        $('#front-garden-slider-txt').css({
            display: 'none',
        })
        $('#front-slider-txt').css({
            display: 'none',
        })
        $('#coast-slider-txt').css({
            display: 'none',
        })
    });



    //TAB DIFERENCIAIS
    $('#apartamentos-txt').css({
        display: 'none',
    })
    $('#seguranca-txt').css({
        display: 'none',
    })


    $('a[href="#sustentabilidade-cont"]').click(function(){
        $('#sustentabilidade-txt').css({
            display: 'block',
        })

        $('#apartamentos-txt').css({
            display: 'none',
        })
        $('#seguranca-txt').css({
            display: 'none',
        })
    })

    $('a[href="#apartamentos-cont"]').click(function(){
        $('#apartamentos-txt').css({
            display: 'block',
        })

        $('#sustentabilidade-txt').css({
            display: 'none',
        })
        $('#seguranca-txt').css({
            display: 'none',
        })
    })

    $('a[href="#seguranca-cont"]').click(function(){
        $('#seguranca-txt').css({
            display: 'block',
        })

        $('#sustentabilidade-txt').css({
            display: 'none',
        })
        $('#apartamentos-txt').css({
            display: 'none',
        })
    })
});
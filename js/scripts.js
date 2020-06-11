$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );

    $("#carouselButton").click(function(){
        if($('#carouselButton').children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children("span").removeClass('fa-pause');
            $('#carouselButton').children("span").addClass('fa-play');

        }
        else if($('#carouselButton').children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children("span").addClass('fa-pause');

        }

        
    });

    $('#loginclick').click(function(){
        $('#loginModal').modal('show');
    })

    $('#cancel_login1,#cancel_login2').click(function(){
        $('#loginModal').modal('hide');
    })

    $('#formclick').click(function(){
        $('#reserveModal').modal('show');
    })

    $('#cancel_reserve1,#cancel_reserve2').click(function(){
        $('#reserveModal').modal('hide');
    })
    

});
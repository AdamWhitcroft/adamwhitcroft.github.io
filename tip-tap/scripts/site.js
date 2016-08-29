$( document ).ready(function() {

    var modalClose = $('.close'),
        overlay = $('.overlay');

    $('.show-modal').on('click', function(e){
        e.preventDefault();
        var modal = $(this).attr('id');
        $('#' + modal + '-modal.overlay').addClass('is-visible');
    });

    $('.step').mouseover(function(){
        var thisBlob = $(this).attr('data-step')
        $('.step').removeClass('hovered');
        $('.step[data-step=' + thisBlob + ']').addClass('hovered');
    }).mouseout(function(){
        $('.step').removeClass('hovered');
    });

    $('.give-wobbble')
    .mouseover(function(){
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('.device').addClass('wiggle');
        $('.device').one(animationEnd,function(){
            $('.device').removeClass('wiggle');
        });

    });

    function resetTutorial(){
        $('.step[data-step=step1]').addClass('hovered');
        $('.device').removeClass('wiggle');
    };

    function closeModal(){
        overlay.removeClass('is-visible');
        setTimeout(resetTutorial, 500);
    };

    modalClose.on('click', function(e){
        e.preventDefault();
        closeModal();
    });

    $(document).on('keyup',function(e) {
        if (e.keyCode == 27) {
            closeModal();
        }
    });

});

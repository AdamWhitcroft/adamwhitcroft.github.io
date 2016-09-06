$( document ).ready(function() {

    var modalClose = $('.close'),
        overlay = $('.overlay'),
        gradients = [
            'seafoam',
            'sully',
            'prince',
            'sunrise'
        ],
        randomNumber = Math.floor(Math.random() * gradients.length),
        videoContainer = $('.video-container');

    $('.show-modal').on('click', function(e){
        e.preventDefault();
        var modal = $(this).attr('id'),
            videoToLoad = $(this).attr('data-iframe');

        $('#' + modal + '-modal.overlay').addClass('is-visible').find(videoContainer).html(videoToLoad);
    });

    function closeModal(){
        overlay.removeClass('is-visible');
        videoContainer.html('');
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

    $('body').addClass(gradients[randomNumber]);

});

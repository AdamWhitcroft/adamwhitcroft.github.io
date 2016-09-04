$( document ).ready(function() {

    var modalClose = $('.close'),
        overlay = $('.overlay'),
        gradients = [
            'seafoam',
            'sully',
            'prince',
            'sunrise'
        ],
        randomNumber = Math.floor(Math.random() * gradients.length);

    $('.show-modal').on('click', function(e){
        e.preventDefault();
        var modal = $(this).attr('id');
        $('#' + modal + '-modal.overlay').addClass('is-visible');
    });

    function closeModal(){
        overlay.removeClass('is-visible');
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

// museum.js
$(document).ready(function() {
    $('.filter-btn').on('click', function() {
        const category = $(this).attr('data-category');

        $('.image-container').each(function() {
            const itemCategory = $(this).attr('data-category');
            if (category === 'all' || itemCategory === category) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });

        $('.description').each(function() {
            const descCategory = $(this).attr('data-category');
            if (category === 'all' || descCategory === category) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });

    $('.image-container img').on('click', function() {
        const imgSrc = $(this).attr('src');
        $('#lightbox .lightbox-img').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });

    $('#lightbox .close').on('click', function() {
        $('#lightbox').fadeOut();
    });

    $('.image-container img').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.1)',
                'transition': 'transform 0.3s'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)'
            });
        }
    );
});




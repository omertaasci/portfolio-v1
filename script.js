// Smooth Scroll
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top
        },
        500,
        'linear'
    );
});

// Change navbar color on scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('bg-dark');
    } else {
        $('.navbar').removeClass('bg-dark');
    }
});


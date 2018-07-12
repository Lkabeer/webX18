var logoX = document.querySelector('#logoX');

$(window).scroll(function() {
    var winTop = $(window).scrollTop(), 
        docHeight = $(document).height(),
        winHeight = $(window).height(),
        scrolled = (winTop / (docHeight - winHeight)) * 100;

        $('.scroll-line').css('width', (scrolled + '%'));
        logoX.textContent = 'Scroll Indicator ' + scrolled.toFixed() + '%';
});
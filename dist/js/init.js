var circle = $('.circle'),
    popupMenu = $('#popup-menu'),
    closeMenubtn = $('.menu__close-btn');

circle.on('click', function () {
  popupMenu.toggleClass('js-hidden');
});

closeMenubtn.on('click', function () {
  popupMenu.toggleClass('js-hidden');
});
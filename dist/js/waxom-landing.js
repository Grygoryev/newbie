var projectCard = $('.project-card');

projectCard.mouseenter(function () {
  $(this).toggleClass('project-card_hover');
  // $(this).toggleClass('project-card__img-hover');
});

projectCard.mouseleave(function () {
  $(this).toggleClass('project-card_hover');
  // $(this).toggleClass('project-card__img-hover');
});
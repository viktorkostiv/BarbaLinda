window.addEventListener('DOMContentLoaded', function () {
    //Burger Menu
    const menu = document.querySelector('.burger'),
        nav = document.querySelector('.navigation');
    menu.addEventListener('click', (e) => {
        e.preventDefault;
        nav.classList.toggle('active');
    });
  
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
});
$(document).ready(function(){
    $('.project__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2
              }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1
            }
          }
          ]
    });
    $('.barbers__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2
              }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1
            }
          }
          ]
    });
  });
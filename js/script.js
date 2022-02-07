$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        speed: 1000,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 5000,
            disableOnInteraction : false,
        }
        
      });

      $(".kakao-banner i").click(function(){
          $(".kakao-banner").addClass("active")
      });


      AOS.init();


});
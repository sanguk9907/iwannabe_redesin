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
            delay: 8000,
            disableOnInteraction : false,
        }
        
      });

      $(".kakao-banner i").click(function(){
          $(".kakao-banner").addClass("active")
      });


      AOS.init();



      $(".top-bar-wrap > .top-bar > .top-box > .ham-icon").click(function(){
        $(".gnb-wrap").addClass("active");
      });

      $(".gnb-wrap > .gnb-bg").click(function(){
        $(".gnb-wrap").removeClass("active");
      })
      
      $(".gnb-wrap > .gnb-box > .left > li").mouseover(function(){

        var indexNum = $(this).index()

        $(".gnb-wrap > .gnb-box > .left > li").removeClass("active");
        $(this).addClass("active");
        $(".gnb-wrap > .gnb-box > .right").eq(indexNum).siblings().removeClass("active");
        $(".gnb-wrap > .gnb-box > .right").eq(indexNum).addClass("active");
      });

      $(".gnb-wrap > .gnb-box > i").click(function(){
        $(".gnb-wrap").removeClass("active");
      });

      $(".top-bar-wrap > .top-bar > .top-box > .icon-box > a > .search-icon").click(function(){
        $(".top-bar-wrap > .top-bar > .top-box > .icon-box > .search-box").addClass("active");
        $(this).addClass("active");
        $(".top-bar-wrap > .top-bar > .top-box > .icon-box > .search-box > .fa-times").addClass("active");
      });

      $(".top-bar-wrap > .top-bar > .top-box > .icon-box > .search-box > .fa-times").click(function(){
        $(".top-bar-wrap > .top-bar > .top-box > .icon-box > .search-box").removeClass("active");
        $(this).removeClass("active");
        $(".top-bar-wrap > .top-bar > .top-box > .icon-box > a > .search-icon").removeClass("active");
      });


});
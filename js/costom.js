/*====================================================
                        Clients
====================================================*/
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        loop:true,
        autoplayHoverPause: true,
        pauseOnHover:false,
        mobileFirst: true,
        prevArrow: false,
        nextArrow: false,
        responsive:[{             
          
          breakpoint: 786,
            settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      }
        },
        {
        breakpoint: 568,
          settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
        },
                  {
        breakpoint: 300,
          settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }

          }]
        });
              });

/*====================================================
                        Clients
====================================================*/

$(document).ready(function(){
    $('.customer').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover:true,
    });
    });

/*====================================================
                        Counter
====================================================*/

$('.count').counterUp({
    delay:10,
    time:2000
})


$(document).ready(function(){
    var scroll = new SmoothScroll('a[href*="#"]');
})

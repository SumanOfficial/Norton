$('.slider').slick({
    
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3,
          infinite: true,
          arrows :true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  $('.hover').hover(
    function(){
      $(this).animate({
        marginTop: "-=5px",
      },200);
    },


    function(){
      $(this).animate({
        marginTop:"0%"
      },200);
    }
  );




 
  $(document).ready(function(){
    $('.norton').slick({
      arrows : false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll:3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows : true,
          }
        }
      ]
    });
  });
 



  $(document).ready(function(){
    $('.testimonial-slider').slick({
      arrows : false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll:3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
 
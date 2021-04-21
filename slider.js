$(".skill-slider").slick({
 
    
    infinite: true,
    arrows:false,
    dots:false,
   

    responsive: [
        {
   
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              infinite: true,
              dots:true,
              arrows:true,
            }
       
          },
          {
   
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots:true,
          arrows:true,
          infinite: true,
        }
   
      }, {
   
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots:true,
          arrows:true,
          infinite: true,
       
        }
   
      }, {
   
  
   
      }]
  });

  $(".project-slider").slick({
 
    
    infinite: true,
    arrows:true,
    dots:true,
   

    responsive: [
        {
   
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              infinite: true,
              dots:true,
              arrows:true,
            }
       
          },
          {
   
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots:true,
          arrows:true,
          infinite: true,
        }
   
      }, {
   
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots:true,
          arrows:true,
          infinite: true,
       
        }
   
      }, {
   
  
   
      }]
  });

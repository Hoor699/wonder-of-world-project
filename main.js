const scrollrevealOption = {
    distance:"50px",
    origin:"bottom",
    duration1:1000,

};

//header container
scrollreveal().reveal(".header__container h1", scrollrevealOption);

scrollreveal().reveal(".header__container h4",{
    ...scrollrevealOption,
    delay:500,
    
});


scrollreveal().reveal(".header__container btn",{
    ...scrollrevealOption,
    delay:1000,
    
});

//about container
scrollreveal().reveal("about__container.section__header",scrollrevealOption);
scrollreveal().reveal("about__container.section__subheader",{
    ...scrollrevealOption,
    delay:500,
});

scrollreveal().reveal("about__container.section__flex",{
    ...scrollrevealOption,
    delay:1000,
});


scrollreveal().reveal("about__container.btn",{
    ...scrollrevealOption,
    delay:1500,
});

/* flight cards */

function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 260; // Adjust based on card width
    carousel.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
    });
  }

  
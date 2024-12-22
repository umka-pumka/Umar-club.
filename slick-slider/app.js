$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });

  // Добавляем переходы по клику на изображения
  $('.image-slider img').on('click', function () {
    const links = {
      'the-100': 'https://www.netflix.com/title/70283264', // Ссылка на "The 100"
      'game-of-thrones': 'https://www.hbo.com/game-of-thrones', // Ссылка на "Game of Thrones"
      'stranger-things': 'https://www.netflix.com/title/80057281', // Ссылка на "Stranger Things"
      'money-heist': 'https://www.netflix.com/title/80192098', 
    };

    const seriesId = $(this).data('series-id');
    if (seriesId && links[seriesId]) {
      window.open(links[seriesId], '_blank');
    }
  });
});

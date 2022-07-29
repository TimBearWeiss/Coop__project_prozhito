(function(w){
  w.addEventListener('load', function(){
    const btnLeft = document.querySelector('.news-slider .round-btn_direction_left');
    const btnRight = document.querySelector('.news-slider .round-btn_direction_right');
    const news = document.querySelector('.news-list');
    const newsScrollWidth = news.scrollWidth - news.clientWidth;
    const newsCardWidth = news.querySelector('.news-card').clientWidth
    let newsScrollLeft = news.scrollLeft;
    btnRight.addEventListener('click', () => {
      newsScrollLeft += newsCardWidth;
      btnLeft.classList.remove('round-btn_condition_disabled');
      if (newsScrollLeft >= newsScrollWidth) {
        newsScrollLeft = newsScrollWidth;
        btnRight.classList.add('round-btn_condition_disabled');
      }
      news.scrollLeft = newsScrollLeft;
    });
    btnLeft.addEventListener('click', () => {
      newsScrollLeft -= newsCardWidth;
      btnRight.classList.remove('round-btn_condition_disabled');
      if (newsScrollLeft <= 0) {
        newsScrollLeft = 0;
        btnLeft.classList.add('round-btn_condition_disabled');
      }
      news.scrollLeft = newsScrollLeft;
    });
  });
})(window);
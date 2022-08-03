(function(w){
  w.addEventListener('load', function(){
    const btnLeft = document.querySelector('.journal-slider .round-btn_direction_left');
    const btnRight = document.querySelector('.journal-slider .round-btn_direction_right');
    const journal = document.querySelector('.journal-list');
    const journalScrollWidth = journal.scrollWidth - journal.clientWidth;
    const journalCardWidth = journal.querySelector('.journal-card').clientWidth
    let journalScrollLeft = journal.scrollLeft;
    btnRight.addEventListener('click', () => {
      journalScrollLeft += journalCardWidth;
      btnLeft.classList.remove('round-btn_condition_disabled');
      if (journalScrollLeft >= journalScrollWidth) {
        journalScrollLeft = journalScrollWidth;
        btnRight.classList.add('round-btn_condition_disabled');
      }
      journal.scrollLeft = journalScrollLeft;
    });
    btnLeft.addEventListener('click', () => {
      journalScrollLeft -= journalCardWidth;
      btnRight.classList.remove('round-btn_condition_disabled');
      if (journalScrollLeft <= 0) {
        journalScrollLeft = 0;
        btnLeft.classList.add('round-btn_condition_disabled');
      }
      journal.scrollLeft = journalScrollLeft;
    });
  });
})(window);
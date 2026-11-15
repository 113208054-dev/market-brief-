// 首頁類別篩選：依卡片的 data-category 顯示或隱藏。新增標的時不需要修改這個檔案。
(function () {
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('.card');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });
      cards.forEach(function (card) {
        var match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.hidden = !match;
      });
    });
  });
})();

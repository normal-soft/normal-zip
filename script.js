// Подсветка текущего языка в переключателе.
// Язык текущей страницы определяется по пути: корень → en, /es/, /ru/ и т.д.
(function () {
  var path = location.pathname;
  var cur = path.replace(/\/index\.html$/, '');
  cur = cur === '' ? 'en' : cur.split('/')[1];
  document.querySelectorAll('[data-lang-page]').forEach(function (a) {
    if (a.getAttribute('data-lang-page') === cur) a.classList.add('active');
  });
})();

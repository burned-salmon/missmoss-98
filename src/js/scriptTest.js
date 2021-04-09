var nunjucks = require('nunjucks');

console.log(nunjucks.render(
'index.njk', {
  page_title: "Pizza Time!",
  dinner: "Pizza"
}
));

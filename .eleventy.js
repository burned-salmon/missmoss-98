// Import fast-glob package
const fg = require('fast-glob');

// Run search for images in /gallery and /sponsors
var stampImages = fg.sync(['**/88x31/*', '!**/public']);
const stickerImages = fg.sync(['**/stickers/*', '!**/public']);

for (image in stampImages) {

  var index = stampImages.indexOf(image);

  if (index !== -1) {
    var newImage = image.slice(4);
    stampImages[index] = newImage;
  }
}
//Create collections so you can access the data in your templates
module.exports = function(eleventyConfig) {
  /*
  eleventyConfig.setTemplateFormats([
    "html",
    "njk",
    "css",
    "png",
    "gif",
    "woff",
    "woff2"
  ]);
    */
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addWatchTarget("./src/fonts/");
  eleventyConfig.addPassthroughCopy("./src/projects/analoghorror");
  eleventyConfig.addWatchTarget("./src/projects/analoghorror/");

  //Create collection of gallery images
  eleventyConfig.addCollection('stamps', function(collection) {
    return stampImages;
  });

  //Create collection of sponsor logos
  eleventyConfig.addCollection('stickers', function(collection) {
    return stickerImages;
  });

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    templateFormats: ["html", "njk", "md"],
    dir: {
      includes: "_includes",
      layouts: "_layouts",
      input: "src",
      output: "public",
    },
  };
};
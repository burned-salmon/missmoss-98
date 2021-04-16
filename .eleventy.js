// Import fast-glob package
const fg = require('fast-glob');

// Run search for images in /gallery and /sponsors
const stampImageSrc = fg.sync(['**/88x31/*', '!**/public'], { objectMode: true });
//const stickerImages = fg.sync(['**/stickers/*', '!**/public']);

var stampImageNames = [];
for (image in stampImageSrc) {

  stampImageNames.push(image["name"]);

    //var newImage = image.slice(4);
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

  //Create collections of images
  eleventyConfig.addCollection('stamps', function(collection) {
    return stampImageNames;
  });

  //eleventyConfig.addCollection('stickers', function(collection) {
  //  return stickerImages;
  //});

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

// Import packages and initialize variables
const fg = require('fast-glob');
var newVal = "";

// Functions for importing the images
function prepImageArray(value) {
  newVal = String(value);
  newVal = newVal.slice(4);
  stampImageNames.push(newVal);
}

// Search for le images
const stampImageSrc = fg.sync(['**/88x31/*', '!**/public']);
var stampImageNames = [];
//const stickerImageSrc = fg.sync(['**/stickers/*', '!**/public']);
//var stickerImageNames = [];

stampImageSrc.forEach(prepImageArray);

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
  //  return stickerImageNames;
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

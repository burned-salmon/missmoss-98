// Import packages and initialize variables
const fg = require('fast-glob');
var newVal = "";
var newArray = [];

// Functions for importing the images
function prepImageArray(value) {
  newVal = String(value);
  newVal = newVal.slice(4);
  newArray.push(newVal);
}

// blinkies
const blinkyImageSrc = fg.sync(['**/150x20/*', '!**/public']);
var blinkyFilePaths = [];
blinkyImageSrc.forEach(prepImageArray);
blinkyFilePaths = newArray;
newArray = [];

// internetbumperstickers.com
const bumperImageSrc = fg.sync(['**/250x40/*', '!**/public']);
var bumperFilePaths = [];
bumperImageSrc.forEach(prepImageArray);
bumperFilePaths = newArray;
newArray = [];

// Stamps
const stampImageSrc = fg.sync(['**/99x56/*', '!**/public']);
var stampFilePaths = [];
stampImageSrc.forEach(prepImageArray);
stampFilePaths = newArray;
newArray = [];

// Stickers
const stickerImageSrc = fg.sync(['**/stickers/*', '!**/public']);
var stickerFilePaths = [];
stickerImageSrc.forEach(prepImageArray);
stickerFilePaths = newArray;
newArray = [];

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

  eleventyConfig.addPassthroughCopy("./src/toys/girb");

  //Add shortcodes

  eleventyConfig.addPairedShortcode("window", function(content, title, id) {
    return `<section id="${id}">
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">${title}</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize" onclick="minimizeThing('${id}');"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" onclick="hideThing('${id}');"></button>
          </div>
        </div>
        <div class="window-body">
          ${content}
        </div>
      </div>
    </section>`;
  });

  //Create collections of images

  eleventyConfig.addCollection('blinkies', function(collection) {
    return blinkyFilePaths;
  });

  eleventyConfig.addCollection('bumperstickers', function(collection) {
    return bumperFilePaths;
  });

  eleventyConfig.addCollection('stamps', function(collection) {
    return stampFilePaths;
  });

  eleventyConfig.addCollection('stickers', function(collection) {
    return stickerFilePaths;
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

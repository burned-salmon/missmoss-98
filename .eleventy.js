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
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addWatchTarget("./src/fonts/");
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

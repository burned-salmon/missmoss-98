// Import packages and initialize variables
const fg = require('fast-glob');

// Functions for importing the images
function prepImageArray(value, index, arr) {
  arr[index] = value.slice(4);
}

let cols = [{
    name: 'blinkies',
    path: '**/150x20/*'
  },
  {
    name: 'bumperstickers',
    path: '**/250x40/*'
  },
  {
    name: 'stamps',
    path: '**/99x56/*'
  },
  {
    name: 'mm_ears',
    path: '**/monstermachine/ear*'
  },
  {
    name: 'mm_arms',
    path: '**/monstermachine/arm*'
  },
  {
    name: 'mm_limbs',
    path: '**/monstermachine/limb*'
  },
  {
    name: 'mm_feet',
    path: '**/monstermachine/foot*'
  },
  {
    name: 'mm_toes',
    path: '**/monstermachine/toes*'
  },
  {
    name: 'mm_wings',
    path: '**/monstermachine/wing*'
  },
  {
    name: 'mm_eyes',
    path: '**/monstermachine/eye*'
  },
  {
    name: 'mm_mouths',
    path: '**/monstermachine/mouth*'
  },
  {
    name: 'mm_bodies',
    path: '**/monstermachine/body*'
  },
  {
    name: 'mm_patches',
    path: '**/monstermachine/patch*'
  },
  {
    name: 'mmc_melonking',
    path: '**/monstermachine/melonking*'
  }
];

//Create collections so you can access the data in your templates
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addWatchTarget("./src/fonts/");
  eleventyConfig.addPassthroughCopy("./src/projects");
  eleventyConfig.addWatchTarget("./src/projects/");
  eleventyConfig.addPassthroughCopy("./src/ring");
  eleventyConfig.addWatchTarget("./src/ring/");
  eleventyConfig.addPassthroughCopy("./src/games");
  eleventyConfig.addWatchTarget("./src/games/");

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

  //This code was kindly given to me by MelonKing :D
  for (let i = 0; i < cols.length; i++) {
    var col = cols[i];
    col.result = fg.sync([col.path, '!**/public']);
    col.result.forEach(prepImageArray);
    eleventyConfig.addCollection(col.name, function(collection) {
      return cols[i].result;
    });
  }

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

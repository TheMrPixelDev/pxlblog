/*const images = require("@11ty/eleventy-img");

const fs = require("fs");
const path = require("path");

const picFiles = fs.readdirSync(path.join(__dirname, "src", "assets", "pictures"))
console.log(picFiles)

exports.data = {
    pagination: {
        data: "pictures"
    },
    pictures: picFiles
}*/

const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss, {
        posthtmlRenderOptions: {
            closingSingleTag: "default"
        }
    });
    eleventyConfig.addPassthroughCopy("./src/assets/")
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}
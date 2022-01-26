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

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/")
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}
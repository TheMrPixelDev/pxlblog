const path = require("path");
const fs = require("fs");
const htmlGenerator = require("./html_generator")

var postFolder = path.join(__dirname, "markdown", "blogposts");

var blogPosts = [];

fs.readdir(postFolder, (err, files) => {

    if(err) {
        return console.log("Unable to scan directory for blog posts.");
    }


    files.forEach((file) => {

        var postName = file.split(".");
        postName[postName.length - 1] = "html";


        fs.readFile(path.join(postFolder, file), (err, data) => {
            
            if(err) {
                return console.log(`Unable to read file ${file}`);
            }

            var html = htmlGenerator.buildHtml(data.toString());

            fs.writeFile(path.join(__dirname, "blogposts", postName.join(".")), html, {
                encoding: "utf-8"
            }, (err) => {
                if(err) {
                    return console.log(`Failed to write blog post ${file}.`);
                }
            })            
    
        })

        var postObject = {
            "title": postName[0],
            "file": postName.join(".")
        }

        blogPosts.push(postObject)


    })

    fs.writeFile(path.join(__dirname, "blogposts.json"), JSON.stringify(blogPosts), { encoding: "utf-8" }, (err) => {
        if(err){
            return console.log(err);
        }
    });

    var htmlPosts = [];

    blogPosts.forEach((post) => {
        htmlPosts.push(`
        <h1><a href="/blogposts/${post.file}">${post.title}</a></h1>
        `)
    })

    var indexPage = htmlGenerator.buildIndexPage(
        htmlPosts.join("\n")
    )

    fs.writeFile(path.join(__dirname, "index.html"), indexPage, { encoding: "utf-8" }, (err) => {
        if(err) {
            return console.log(err);
        }
    })

})



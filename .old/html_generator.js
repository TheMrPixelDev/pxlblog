const marked = require("marked").marked;

function buildHtml(markdown) {

    const html = marked.parse(markdown).toString()
    return (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/static/css/skeleton.css">
        <link rel="stylesheet" href="/static/css/normalize.css">
        <link rel="stylesheet" href="/static/css/custom.css">
        <title>[HOME]</title>
    </head>
    <body data-new-gr-c-s-check-loaded="14.1040.0" data-gr-ext-installed >
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="http://">
                            HOME
                        </a>    
                    </li>
                    <li>
                        <a href="http://">
                            BLOG
                        </a>
                    </li>
                    <li>
                        <a href="">
                            IMPRESSUM
                        </a>
                    </li>
                    <li>
                        <a href="">
                            PRIVACY
                        </a>
                    </li>
                    <li>
                        <a href="">
                            GALLERY
                        </a>
                    </li>
                </ul>
            </nav>
                <div id="content">
                ${html}
                </div>
    </body>
    </html>`)
}

function buildIndexPage(html) {
    //const html = marked.parse(markdown).toString()
    return (
        `
                <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/static/css/skeleton.css">
            <link rel="stylesheet" href="/static/css/normalize.css">
            <link rel="stylesheet" href="/static/css/custom.css">
            <title>[HOME]</title>
        </head>
        <body data-new-gr-c-s-check-loaded="14.1040.0" data-gr-ext-installed >
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <a href="/blog.html">
                                BLOG
                            </a>
                        </li>
                        <li>
                            <a href="/impressum.html">
                                IMPRESSUM
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy.html">
                                PRIVACY POLICY
                            </a>
                        </li>
                    </ul>
                </nav>
                    <div id="content">
                            ${html}
                    </div>
            </div>
        </body>
        </html>
        `
    )
}

module.exports = {
    buildHtml,
    buildIndexPage
};
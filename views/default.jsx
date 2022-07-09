// This page creates the "default" layout that react will render for the user. This will be the basic HTML skeleton so we will not need to rewrite HTML for each page

const React = require('react');

function Default (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default
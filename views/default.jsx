// This page creates the "default" layout that react will render for the user. This will be the basic HTML skeleton so we will not need to rewrite HTML for each page

const React = require('react');

function Default (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&family=Press+Start+2P&display=swap" rel="stylesheet"/> 
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places/Restaurants</a>
                        </li>
                        <li>
                            <a href="/places/new">Add a Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default
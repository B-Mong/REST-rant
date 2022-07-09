// This is the homepage for the application.
// Lines 3 and 4 will import the default html skeleton from default.jsx into here
const React = require('react');
const Default = require('./default');


function home () {
    return (
        <default>
            <main>
                <h1>Home</h1>
            </main>
        </default>

    )
}

module.exports = home

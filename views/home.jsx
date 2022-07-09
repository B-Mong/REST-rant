// This is the homepage for the application.
// Lines 3 and 4 will import the default html skeleton from default.jsx into here
const React = require('react');
const Default = require('./default');


function home() {
    return (
        <Default>
            <main>
                <h1>Rest Rant Home</h1>
            </main>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </Default>

    )
}

module.exports = home

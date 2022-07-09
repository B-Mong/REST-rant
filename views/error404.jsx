const React = require('react');
const Default = require('./default');

function error404() {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src="/images/cute-error.jpg" alt="Sad Octopus" />
                <div>
                    Photo by <a href="https://unsplash.com/@mahdibafande?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mahdi Bafande</a> on <a href="https://unsplash.com/s/photos/error?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <p>Oops, sorry, we can't find this page!</p>
                <a href="/">
                    <button className="btn-primary">Return Home</button>
                </a>
            </main>
        </Default>
    )
}


module.exports = error404;
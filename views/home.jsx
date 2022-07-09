// This is the homepage for the application.
// Lines 3 and 4 will import the default html skeleton from default.jsx into here
const React = require('react');
const Default = require('./default');


function home() {
    return (
        <Default>
            <main>
                <h1>Rest Rant Reviews</h1>
                <p className="home-description">A website where you can RANT about RESTaurants!</p>
            </main>
            <div className="home-image">
                <img src="/images/chia-drink.jpg" alt="Chia Drink" />
                <div>
                    Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <div className="home-button">
                <a href="/places">
                    <button className="btn-primary">Restaurants</button>
                </a>
            </div>
        </Default>

    )
}

module.exports = home

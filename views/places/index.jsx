// Index page for places
const React = require('react');
const Default = require('../default');

function Index (data) {
    // Equates a variable to the html that we want displayed
    let placesFormatted = data.places.map((place) =>{
        return (
                <div>
                    <h2>{place.name}</h2>
                    <img src={place.pic} alt={place.name}></img>
                </div>
        )
    })
    // This is the default html combined with the variable/data we created above
    return (
        <Default>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Default>
    )
}

module.exports = Index
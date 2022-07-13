// Index page for places // Grid page of all the restaurants/places
const React = require('react');
const Default = require('../default');

function Index (data) {
    // Equates a variable to the html that we want displayed
    let placesFormatted = data.places.map((place, index) =>{
        return (
                <div className="col-sm-6">
                    <h2 className="text-center">
                        <a href={`/places/${index}`}>
                            {place.name}
                        </a>
                    </h2>
                    <p className="text-center">
                        {place.cuisines}
                    </p>
                    <img src={place.pic} alt={place.name}></img>
                    <p className="text-center">
                        Located in {place.city}, {place.state}
                    </p>
                </div>
        )
    })
    // This is the default html combined with the variable/data we created above
    return (
        <Default>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = Index
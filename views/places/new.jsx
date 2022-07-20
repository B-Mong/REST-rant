// This is the page that will redirect users to a form to input a new restaurant
const React = require('react')
const Default = require('../default')


function new_form() {
    return (
        <Default>
            <main>
                <h1>Add a new Restaurant</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Restaurant Name</label>
                        <br />
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Restaurant Picture URL</label>
                        <br />
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City Name</label>
                        <br />
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State Abbreviation</label>
                        <br />
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisine</label>
                        <br />
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group">
                        <label for="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Upload" />
                </form>
            </main>
        </Default>
    )
}

module.exports = new_form

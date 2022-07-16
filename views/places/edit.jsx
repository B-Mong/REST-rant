const React = require('react')
const Default = require('../default')


function edit_form(data) {
    return (
        <Default>
            <main>
                <h1>Edit a Restaurant</h1>
                <form method="POST" action={`/places/${data.id}?method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Restaurant Name</label>
                        <br />
                        <input className="form-control" id="name" name="name" required value={data.place.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Restaurant Picture URL</label>
                        <br />
                        <input className="form-control" id="pic" name="pic" value={data.place.pic} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City Name</label>
                        <br />
                        <input className="form-control" id="city" name="city" value={data.place.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State Abbreviation</label>
                        <br />
                        <input className="form-control" id="state" name="state" value={data.place.state}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisine</label>
                        <br />
                        <input className="form-control" id="cuisines" name="cuisines" required value={data.place.cuisines}/>
                    </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Upload"/>
                </form>
            </main>
        </Default>
    )
}

module.exports = edit_form

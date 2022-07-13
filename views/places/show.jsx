const React = require('react')
const Default = require('../default')

function show(data) {
    return (
        <Default>
            <main>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md">
                            <div className="PlacePic">
                                <img src={data.place.pic} alt={data.place.name}></img>
                            </div>
                        </div>
                        <div className="col-md" id="PlaceInfo">
                            <h1>{data.place.name}</h1>
                            <h2>Ratings</h2>
                            <p>Not Rated</p>
                            <h2>Description</h2>
                            <p>Located in {data.place.city}, {data.place.state}. This place serves {data.place.cuisines}</p>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="comments mt-4" id="CommentSection">
                    <h1>Comments</h1>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Default>
    )
}

module.exports = show

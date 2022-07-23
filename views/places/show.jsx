const React = require('react')
const Default = require('../default')

function show(data) {
    let comments = ( // This is the default that happens if the array length is 0
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) { // If length > 0 then this executes and gets inserted in place of {comments}
        comments = data.place.comments.map( c => {
            return(
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h3>{c.content}</h3>
                    <h3>{c.author}</h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

    // HTML page
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
                            <h4>{data.place.showEstablished()}</h4> 
                            <h4>This place serves {data.place.cuisines}</h4>
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
                    {comments}
                </div>
            </main>
        </Default>
    )
}

module.exports = show

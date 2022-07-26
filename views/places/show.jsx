const React = require('react')
const Default = require('../default')

function show(data) {
    let comments = ( // This is the default that happens if the array length is 0
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not Yet Rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} Stars
            </h3>
        )
    }
    if (data.place.comments.length) { // If length > 0 then this executes and gets inserted in place of {comments}
        comments = data.place.comments.map(c => {
            return (
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
                            {rating}
                            <br />
                            <h2>Description</h2>
                            <h4>{data.place.showEstablished()}</h4>
                            <h4>This place serves {data.place.cuisines}</h4>
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
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
                <h1>Add a new Comment</h1>
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                    <div className="form-group">
                        <label htmlFor="author">Author Name</label>
                        <br />
                        <input
                            className="form-control"
                            id="author"
                            name="author"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Review</label>
                        <br />
                        <textarea className="form-control" rows="3" id="content" name="content"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Star Rating</label>
                        <br />
                        <input
                            className="custom-range"
                            type="range"
                            id="stars"
                            name="stars"
                            defaultValue="2.5"
                            min="0" max="5"
                            step="0.5"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant?</label>
                        <br />
                        <input
                            type="checkbox"
                            id="rant"
                            name="rant"
                            defaultChecked
                        />
                    </div>
                    <br />
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Submit" />
                </form>
            </main>
        </Default>
    )
}

module.exports = show

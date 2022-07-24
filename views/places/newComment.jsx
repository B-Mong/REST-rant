const React = require('react')
const Default = require('../default')

function new_comment(){
    return(
        <Default>
            <main>
                <h1>Add a new Comment</h1>
                <form method="POST" action="/places/:id">
                    <div className="form-group">
                        <label htmlFor="author">Author Name</label>
                        <br />
                        <input className="form-control" id="author" name="author" required />
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
                        className="custom-range" type="range" id="stars" name="stars"
                        defaultValue="2.5" min="0" max="5" step="0.5" 
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor="rant">Rant?</label>
                        <br />
                        <input className="form-check-input" type="checkbox" id="rant" name="rant"/>
                    </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </main>
        </Default>
    )
}



module.exports = new_comment
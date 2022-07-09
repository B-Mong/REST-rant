// This is the page that will redirect users to a form to input a new restaurant
const React = require('react')
const Default = require('../default')


function new_form () {
    return (
        <Default>
            <main>
                <h1>Add a new Restaurant</h1>
            </main>
        </Default>
    )
}

module.exports = new_form

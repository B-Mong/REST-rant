// Imports dotenv so we can use env variables
require('dotenv').config()
// Imports express and initalizes it
const express = require('express')
const app = express()

// Express Settings
// Sets the view engine as jsx and react so it can be used to render the application, adds css
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/places', require('./controllers/places'))
app.use(express.static('public'))
// Converts strings into objects
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('home') // renders the home.jsx from the views folder. NOTE .render() will automatically look into a view folder for a home file
})

// routes all other unspecified routes to a 404 page that we control
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is up!')
})

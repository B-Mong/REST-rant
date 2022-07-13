const express = require('express');
const router = require('express').Router();
const places = require('../models/places.js');


// New 
router.get('/new', (req, res) => {
    res.render('places/new')
})

// GET Places
router.get('/', (req, res) => {
    res.render('places/index.jsx', { places })
})

// Create
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

// Show // GET // Specific place/restaurant page
router.get('/:id', (req, res) => {
    let id = Number(req.params.id) // Specifies that the id passed in the request is a number
    if (isNaN(id)) { // If it is not a number, render the 404 page
        res.render('error404')
    }
    else if (!places[id]) { // If the number is not a valid array index from our data, render a 404
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id }) // If it passes both conditionals, it is valid and should render the correct page.
    }
})

//DELETE ROUTE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect(303, '/places')
    }
})





module.exports = router

const express = require('express');
const router = require('express').Router();
const places = require('../models/places.js');
const db = require('../models')

// New 
router.get('/new', (req, res) => {
    res.render('places/new')
})

// New Comment
router.get('/newComment', (req, res) => {
    res.render('places/newComment')
})

// GET Places
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// Create
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error'
                res.render('places/new', {message})
            } else {
                res.render('error404')
            }
        })
})

// EDIT
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', {
            place: places[id],
            id: req.params.id
        })
    }
})

// Show // GET // Specific place/restaurant page
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            res.render(`places/show`, { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
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

// EDIT UPDATE
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Save the new data into places[id]
        places[req.params.id] = req.body
        res.redirect(302, `/places/${req.params.id}`)
    }
})




module.exports = router

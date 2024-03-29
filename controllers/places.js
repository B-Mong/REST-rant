const express = require('express');
const router = require('express').Router();
const places = require('../models/places.js');
const db = require('../models')

// New Place Form
router.get('/new', (req, res) => {
    res.render('places/new')
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
                res.render('places/new', { message })
            } else {
                res.render('error404')
            }
        })
})


// EDIT
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
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
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})


// Upload Comment
router.post('/:id/comment', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            if (req.body.rant === 'on') {
                req.body.rant = true
            }
            else {
                req.body.rant = false
            }
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

// EDIT UPDATE
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})





module.exports = router

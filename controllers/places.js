const express = require('express');
const router = require('express').Router();
const places = require('../models/places.js');

router.use(express.urlencoded({ extended: true }))

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



module.exports = router

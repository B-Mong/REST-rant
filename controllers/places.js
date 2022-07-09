const router = require('express').Router();
// GET Places
router.get('/', (req, res) => {
    let places = [{   // This is hard coded data intended for development purposes
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding-cat.jpg'
    }]
    res.render('places/index', {places}) // Renders the index.jsx from the folder of view
})

module.exports = router

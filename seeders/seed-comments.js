const db =require('../models')

async function Seed() {
    // Grab a place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create fake comment 
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommend!'
    })

    // Add that comment to the place's comment array
    place.comments.push(comment.id)

    // Save the place now that it has a comment
    await place.save()

    // Exit
    process.exit()
}

Seed()
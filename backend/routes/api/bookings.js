const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, Review, Sequelize, SpotImage, ReviewImage, Booking } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const booking = require('../../db/models/booking');

//Get all of the Current User's Bookings
router.get('/current', requireAuth, async(req, res) => {
    let bookingsObj;
    let newArray = [];
    const currBookings = await Booking.findAll({
        where: {
            userId: req.user.id
        },
        include: {
            model: Spot,
            attributes: {
                exclude: ['description', 'createdAt', 'updatedAt']
            },
        },

    })
    for (let i = 0; i< currBookings.length; i++){
        bookingsObj = currBookings[i].toJSON();
        const previewImageUrl = await SpotImage.findByPk(currBookings[i].id, {
            where: { preview: true },
            attributes: ['url'], 
            raw: true
        })
        
        bookingsObj.Spot.previewImage = !previewImageUrl ? '' : previewImageUrl.url;
        newArray.push(bookingsObj)
    }
    return res.json({
        Bookings: newArray})
})


// let {startDate, endDate} =(req.body)
// startDate = new Date(startDate)


module.exports = router;
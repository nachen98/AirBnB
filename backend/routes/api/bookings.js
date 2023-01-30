const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, Review, Sequelize, SpotImage, ReviewImage, Booking } = require('../../db/models');
const router = express.Router();
const { Op } = require("sequelize");
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
        console.log("bookingsObj##################", bookingsObj)
        newArray.push(bookingsObj)
    }
    return res.json({
        Bookings: newArray})
})

async function bookingConflicts(spotId, startDate, endDate){
    const conflictBookings = await Booking.findOne({
        where: {
            spotId,
            [Op.or]: [{
                    startDate: {
                        [Op.lte]: endDate,
                        [Op.gte]: startDate
                    }
                },{
                    endDate: {
                        [Op.lte]: endDate,
                        [Op.gte]: startDate
                    }
                },{
                    startDate: {
                        [Op.lte]: startDate
                    },
                    endDate: {
                        [Op.gte]: endDate
                    }
                },{
                    startDate: {
                        [Op.gte]: startDate
                    },
                    endDate: {
                        [Op.lte]: endDate
                    }
                }
            ],
        }
    });

    return conflictBookings
}
router.put('/:bookingId', requireAuth, async(req, res)=> {
    let today = new Date().toISOString().slice(0, 10)
    const booking = await Booking.findByPk(req.params.bookingId)
    const {startDate, endDate} = req.body
    if(booking){
        if(endDate<startDate){
            res.status(400);
            res.json({
                "message": "Validation error",
                "statusCode": 400,
                "errors": {
                  "endDate": "endDate cannot come before startDate"
                }
            })
        }
        if(endDate < today){
            res.status(403)
            res.json({
                "message": "Past bookings can't be modified",
                "statusCode": 403
            })
        }
        const conflictBookings = await bookingConflicts(booking.spotId, startDate, endDate)
        if(conflictBookings){
            res.status(403);
            return res.json({
                "message": "Sorry, this spot is already booked for the specified dates",
                "statusCode": 403,
                "errors": {
                  "startDate": "Start date conflicts with an existing booking",
                  "endDate": "End date conflicts with an existing booking"
                }
            });
        }
        booking.startDate = startDate;
        booking.endDate = endDate;
        await booking.save();
        return res.json(booking)

    }else{
        res.status(404);
        res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
        })
    }
})

router.delete('/:bookingId', requireAuth, async(req, res) => {
    let today = new Date().toISOString().slice(0, 10)
    const booking = await Booking.findByPk(req.params.bookingId, {
        include: {
            model: Spot
        }
    })
    if(booking){
        if(booking.userId !== req.user.id || booking.Spot.ownerId !== req.user.id){
            res.status(403);
            return res.json({
                "message": "You cannot delete this booking.",
                "statusCode": 403
            })
        }else{
            if(booking.startDate < today){
                res.status(403)
                return res.json({
                    "message": "Bookings that have been started can't be deleted",
                    "statusCode": 403
                })
            }
        }
        await booking.destroy()
        res.status(200)
        return res.json({
            "message": "Successfully deleted",
            "statusCode": 200
        })
    }else {
        res.status(404);
        return res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
        });
    }
})
module.exports = router;
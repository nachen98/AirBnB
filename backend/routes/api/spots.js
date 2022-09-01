const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, Review, Sequelize, SpotImage, ReviewImage, Booking } = require('../../db/models');
const router = express.Router();
const { Op } = require("sequelize");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

//get all spots
router.get(
    '/', async(req, res) => {
      
        let spots = await Spot.findAll({
            attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'description', 'price', 'createdAt', 'updatedAt']
        });
        //console.log(spots)
        let newArray = []
        let SpotsObj
        let avgRating
        for(let i = 0; i< spots.length; i++){
            SpotsObj = spots[i].toJSON()
            avgRating = await Review.findAll({
                where: {
                    spotId: spots[i].id
                },
                attributes: [[Sequelize.fn('AVG', Sequelize.col("stars")), 'avgRating']],
                raw: true
            })
            //console.log("avgRating******", avgRating) 
            //SpotsObj.avgRating = !avgRating[0].dataValues.avgRating ? 0 : avgRating[0].dataValues.avgRating 
            SpotsObj.avgRating = !avgRating ?  0 : avgRating[0].avgRating;
            const previewImageUrl = await SpotImage.findByPk(spots[i].id, {
                where: { preview: true },
                attributes: ['url']
            })
           
            SpotsObj.previewImage = !previewImageUrl ? '' : previewImageUrl.url

            newArray.push(SpotsObj)
        }
        //console.log(avgRating)
        return res.json({
            Spots: newArray
        })
        
    }
)

//post a spot
router.post(
    '/', requireAuth, async(req, res, next) => {
        const {address, city, state, country, lat, lng, name, description, price} = req.body;
        if(!address || !city || !state || !country || !lat || !lng || !name || !description || !price) {
            res.status(400);
            return res.json({
                "message": "Validation Error",
                "statusCode": 400,
                "errors": {
                    "address": "Street address is required",
                    "city": "City is required",
                    "state": "State is required",
                    "country": "Country is required",
                    "lat": "Latitude is not valid",
                    "lng": "Longitude is not valid",
                    "name": "Name must be less than 50 characters",
                    "description": "Description is required",
                    "price": "Price per day is required"
                
            }
        })
    }
        let createdSpot = await Spot.create({
            ownerId: req.user.id, address, city, state, country, lat, lng, name, description, price,
        });
        return res.json(createdSpot)
    }),

//get spots of current owner
router.get(
    '/current', async(req, res, next) => {
        const {user} = req
        const currentUserSpot = await Spot.findAll({
            where: {
                ownerId: user.id
            }
        })
        let newArray = []
        let SpotsObj
        let avgRating
        for(let i = 0; i< currentUserSpot.length; i++){
            SpotsObj = currentUserSpot[i].toJSON()
            avgRating = await Review.findAll({
                where: {
                    spotId: currentUserSpot[i].id
                },
                attributes: [[Sequelize.fn('AVG', Sequelize.col("stars")), 'avgRating']],
                raw: true
            })
            //console.log("avgRating******", avgRating) 
            //SpotsObj.avgRating = !avgRating[0].dataValues.avgRating ? 0 : avgRating[0].dataValues.avgRating 
            SpotsObj.avgRating = !avgRating ?  0 : avgRating[0].avgRating;
            const previewImageUrl = await SpotImage.findByPk(currentUserSpot[i].id, {
                where: { preview: true },
                attributes: ['url']
            })
           
            SpotsObj.previewImage = !previewImageUrl ? '' : previewImageUrl.url
            newArray.push(SpotsObj)
        return res.json({
           Spots: newArray
        })
    }
}),

//add image to a spot based on spotId
router.post(
    '/:spotId/images', async(req, res) => {
        const spot = await Spot.findByPk(req.params.spotId)
        //console.log('spot*********', spot)
        const {url, preview} = req.body
        if(!spot){
           res.status(404)
           return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
           })
        }
        const newImage = await SpotImage.create({
            spotId: req.params.spotId,
            url, preview
        })
        return res.json({
            id: newImage.id,
            url,
            preview
        })
    }
)

//get details of a spot based on spotId
router.get(
    '/:spotId', async(req, res) => {
        const spotDetails = await Spot.findByPk(req.params.spotId, {
            include: [{
                model: SpotImage,
                attributes: ['id', 'url', 'preview']
            }, {
                model: User, 
                as: 'Owner',
                attributes: ['id', 'firstName', 'lastName']
            }]
        })
        if(spotDetails) {
            const numReviews = await Review.count({
                where: {
                    spotId: req.params.spotId,
                }
            })
            const avgRating = await Review.findAll({
                where: {
                    spotId: req.params.spotId
                },
                attributes: [[Sequelize.fn('AVG', Sequelize.col("stars")), 'avgRating']],
                raw: true
            });
            const spotObj = spotDetails.toJSON()
            spotObj.numReviews = numReviews;
            spotObj.avgStarRating = avgRating[0].avgRating            
            return res.json(spotObj)
        }else{

            res.status(404);
            return res.json({
                "message": "Spot couldn't be found",
                "statusCode": 404
            });
        }
    }
)

//edit a spot

router.put ('/:spotId', requireAuth, async(req, res)=> {
    const {address, city, state, country, lat, lng, name, description, price} = req.body;
    if(!address || !city || !state || !country || !lat || !lng || !name || !description || !price) {
        res.status(400);
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "address": "Street address is required",
                "city": "City is required",
                "state": "State is required",
                "country": "Country is required",
                "lat": "Latitude is not valid",
                "lng": "Longitude is not valid",
                "name": "Name must be less than 50 characters",
                "description": "Description is required",
                "price": "Price per day is required"
            
        }
    })    
    
    }
    const spot = await Spot.findByPk(req.params.spotId);
    console.log(spot)
    if(spot){
        const updatedSpot = await spot.update({
            address, city, state, country, lat, lng, name, description, price
        })
        return res.json(updatedSpot)
    } else{
        res.status(404)
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
})

//delete a spot
router.delete('/:spotId', requireAuth, async(req, res) => {
    const spot = await Spot.findByPk(req.params.spotId);
    if(spot){
        await spot.destroy();
        res.status(200)
        res.json({
            "message": "Successfully deleted",
            "statusCode": 200
        })
    }else{
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
})

//get reviews by a spot's id
router.get('/:spotId/reviews', async(req, res) => {
    const selectedSpot = await Spot.findByPk(req.params.spotId, {raw: true});
    if(selectedSpot){
      
        const reviews = await Review.findAll({
            where: {
                spotId: selectedSpot.id
            },
            include: [{
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },{
                model: ReviewImage,
                attributes: ['id', 'url']
            }]
        })
       
        return res.json({Reviews: reviews})
    }else{
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
})

//Create a Review for a Spot based on the Spot's id

router.post('/:spotId/reviews', requireAuth, async(req, res)=> {
    const {user} = req
    let {review, stars} = req.body;
    
    const spot = await Spot.findByPk(req.params.spotId, {raw: true})
    const currReview = await Review.findAll( {
        where: {
            spotId: req.params.spotId,
            userId: user.id
        }
    })
    if(currReview.length){
        res.status(403)
        return res.json({
            "message": "User already has a review for this spot",
            "statusCode": 403
        })
    }
    if(!spot) {
        res.status(404)
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    if(!review && !stars || parseInt(stars) > 5 || parseInt(stars) < 1 || !Number.isInteger(stars) ){
        res.status(400)
        return res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
                "review": "Review text is required",
                "stars": "Stars must be an integer from 1 to 5",
            }
        })
    }
    if(!review ){
        res.status(400)
        return res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
                "review": "Review text is required",
            }
        })
    }
    if(!stars || parseInt(stars) > 5 || parseInt(stars) < 1 || !Number.isInteger(stars)){
        res.status(400)
        return res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
                "stars": "Stars must be an integer from 1 to 5",
            }
        })
    }
    const reviews = await Review.create({
        spotId: req.params.spotId,
        userId: user.id, 
        review, stars,
    })
    console.log(reviews)
    return res.json(reviews)   
})


// Get all Bookings for a Spot based on the Spot's id
router.get('/:spotId/bookings', async(req, res) => {
    const selectedSpot = await Spot.findByPk(req.params.spotId, {raw: true});
    if(selectedSpot){
        if(selectedSpot.ownerId === req.user.id){
            const ownerbookings = await Booking.findAll({
                where: {
                    spotId: selectedSpot.id
                },
                include: {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName']
                } 
            })
           
            return res.json({Bookings: ownerbookings})
        }else {
            const userBookings = await Booking.findAll({
                where: {
                    spotId: selectedSpot.id,
                    userId: req.user.id
                },
                attributes: ['spotId', 'startDate', 'endDate']
            })
            return res.json({Bookings: userBookings})
        }
        
    }else{
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
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
//Create a Booking from a Spot based on the Spot's id
router.post('/:spotId/bookings', requireAuth, async(req, res) => {
    let {startDate, endDate} = req.body
    const {spotId} = req.params
    const selectedSpot = await Spot.findByPk(spotId, {raw: true});
  
    if(selectedSpot){
        if(selectedSpot.ownerId === req.user.id){
            res.status(403);
            return res.json({
                "message": "Forbidden error",
                "statusCode": 403
            })
        }else {
            if(startDate>endDate){
                res.status(400);
                return res.json({
                    "message": "Validation error",
                    "statusCode": 400,
                    "errors": {
                    "endDate": "endDate cannot be on or before startDate"
                        }
                    })
                }
                const conflictBookings = await bookingConflicts(spotId, startDate, endDate)
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
                const createdBooking = await Booking.create({
                    spotId,
                    userId: req.user.id,
                    startDate,
                    endDate
                })
                return res.json(createdBooking)
            }
        }else{

            res.status(404);
            return res.json({
                "message": "Spot couldn't be found",
                "statusCode": 404
            });
        }  
})


module.exports = router;
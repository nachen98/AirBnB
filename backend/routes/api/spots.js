const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, Review, Sequelize, SpotImage } = require('../../db/models');
const router = express.Router();
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
    
})
module.exports = router;
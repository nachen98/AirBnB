const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, Review, Sequelize, SpotImage } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
router.get(
    '/current', async(req, res, next) => {
        const {user} = req
        const currentUserSpot = await Spot.findAll({
            where: {
                ownerId: user.id
            }
        })
        return res.json({
            Spots: currentUserSpot
        })
    }
)
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
                attributes: [[Sequelize.fn('AVG', Sequelize.col("stars")), 'avgRating']]
            }) 
            SpotsObj.avgRating = avgRating[0].dataValues.avgRating
            
            const previewImageUrl = await SpotImage.findByPk(spots[i].id, {
                where: { preview: true },
                attributes: ['url']
            })
            //console.log(previewImageUrl)
            SpotsObj.prevewImage = previewImageUrl.url

            newArray.push(SpotsObj)
        }
        //console.log(avgRating)
        return res.json({
            Spots: newArray
        })
        
    }
)


// router.get(
//     '/:spotId', async(req, res) => {

//     }
// )

router.post(
    '/', requireAuth, async(req, res, next) => {
        const {address, city, state, country, lat, lng, name, description, price} = req.body;

    }
)
module.exports = router;
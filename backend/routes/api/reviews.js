const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, Review, Sequelize, SpotImage, ReviewImage } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

//get reviews of current user
router.get(
    '/current', requireAuth, async(req, res, next) => {
        let reviewObj;
        let newArray = [];
        const currReviews = await Review.findAll({
            where: {
                userId:  req.user.id
            },
        
            include:[{
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Spot,
                attributes: {
                    exclude: ['description', 'createdAt', 'updatedAt']
                },
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            }
        ]
    })
    console.log('currReviews**********', currReviews)
    for (let i = 0; i< currReviews.length; i++){
        reviewObj = currReviews[i].toJSON();
        const previewImageUrl = await SpotImage.findByPk(currReviews[i].id, {
            where: { preview: true },
            attributes: ['url'], 
            raw: true
        })
        
        reviewObj.Spot.previewImage = !previewImageUrl ? '' : previewImageUrl.url;
        //console.log('reviewObj********', reviewObj)
        newArray.push(reviewObj)
    }
    return res.json({
        Reviews: newArray})
})


module.exports = router;
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
    //console.log('currReviews**********', currReviews)
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

router.post('/:reviewId/images', requireAuth, async(req, res) => {
    const reviews = await Review.findByPk(req.params.reviewId)
    if(!reviews){
        res.status(404);
        res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
        })
    }
    const images = await ReviewImage.findAll({
        where: {
            reviewId: req.params.reviewId
        }
    })
    if(images.length >=10){
        res.status(403);
        res.json({
            "message": "Maximum number of images for this resource was reached",
            "statusCode": 403
        })
    }
    const {url} = req.body
    const newImage = await ReviewImage.create({
        reviewId: req.params.reviewId, url
    })
    return res.json({
        id: newImage.id, url
    })
})
module.exports = router;
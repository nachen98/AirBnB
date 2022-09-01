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

router.put('/:reviewId', requireAuth, async(req, res)=> {
    const reviews = await Review.findByPk(req.params.reviewId)
    if(!reviews){
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    if(reviews.userId !== req.user.id){
        res.status(403);
        return res.json({
            "message": "Forbidden",
            "statusCode": 403
        })
    }
    const {review, stars} = req.body;
    
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

 
    const editedReviews = await reviews.update({review, stars})
    return res.json(editedReviews)    
       
})
module.exports = router;
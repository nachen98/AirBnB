import './SingleSpot.css';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneSpot, deleteSpot } from '../../store/spots';
import { getAllReviewsBySpot } from '../../store/review';
import EditSpotModal from '../EditSpotModal';
import CreateReviewModal from '../CreateReviewModal';
import SpotReview from '../SpotReview';


export function SingleSpot() {

    const { spotId } = useParams()
    const dispatch = useDispatch();
    const history = useHistory()
    const oneSpotById = useSelector(state => state.spots.singleSpot)
    const currUser = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews.spot)
    //console.log('reviews!!!!!!!!!!!!!!', reviews)

    const reviewContents = Object.values(reviews)
    useEffect(() => {
        dispatch(getOneSpot(spotId))
        dispatch(getAllReviewsBySpot(spotId))
    }, [dispatch, spotId])


    let currUserIsOwner = false;
    if (currUser && "id" in currUser && currUser.id === oneSpotById.ownerId) currUserIsOwner = true;

    const deleteSpotButton = async (e) => {
        e.preventDefault();
        await dispatch(deleteSpot(spotId))
        history.push('/')
    }


    if (Object.keys(oneSpotById).length === 0) return null
    //console.log('oneSpotById!!!!!!!', oneSpotById)
    //console.log('reviewContents*************', reviewContents)
    //console.log('currUser!!!!!!', currUser.id)

    let userCreatedReview = false
    if (currUser && "id" in currUser) {
        let filteredContents = reviewContents.filter(reviewContent => reviewContent.userId === currUser.id)

        //console.log('filteredContents!!!!!!!!!!!', filteredContents)
        if (filteredContents.length > 0) userCreatedReview = true
    } else
        userCreatedReview = true;


    return (
        <div className='single-spot-info'>
            <div className='spot-name'>
                {oneSpotById?.name}
            </div>

            <div className='star-rating-review-location'>
                <div className="info-without-button">
                    <div className='rating-star'>
                        <i className="fa-solid fa-star"></i>
                        {Number(oneSpotById.avgStarRating) !== 0 ? Number(oneSpotById.avgStarRating).toFixed(1) : ` New`}
                    </div>
                    <div className="space">  ·  </div>
                    <div className='single-spot-review'>

                        {oneSpotById?.numReviews} reviews

                    </div>

                    <div className="space">  ·  </div>
                    <div className='single-spot-location'>{`${oneSpotById.city}, ${oneSpotById.state}, ${oneSpotById.country}`}</div>
                </div>

                <div className='buttons'>

                    {currUserIsOwner && (
                        <div >
                            <button onClick={deleteSpotButton} className='delete-spot-button'>Delete spot</button>
                            <EditSpotModal spotId={spotId} />
                        </div>

                    )}
                </div>
            </div>

            <div className='single-spot-img'>

                {oneSpotById.SpotImages.map(img =>
                    (<img key={img.id} src={img.url} alt={img.url} />)
                )}
            </div>
            <div className='single-spot-owner'>
                <h2>Hosted by: {oneSpotById.Owner.firstName} {oneSpotById.Owner.lastName}</h2>

            </div>
            <div className='single-spot-price'>
                {`$${oneSpotById.price} `} night
            </div>
            <div className='single-spot-description'>
                Description: {oneSpotById.description}
            </div>

            <div className='rating-star'>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className='single-spot-rating'>
                {Number(oneSpotById.avgStarRating) !== 0 ? Number(oneSpotById.avgStarRating).toFixed(1) : ` New`}
            </div>
            <div className="space"> · </div>
            <div className='single-spot-review'>
                {oneSpotById?.numReviews} reviews
            </div>

            {!userCreatedReview && !currUserIsOwner && (
                <div className='user-create-review'>
                    <CreateReviewModal spotId={spotId} />
                </div>
            )}

            {reviewContents.map(reviewContent => {
                console.log('reviewContent333333333333', reviewContent)
                return (<SpotReview key={reviewContent.id} reviewContent={reviewContent} />)
            }
            )}


        </div>
    )
}
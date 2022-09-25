
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./EditSpot.css"
import { updateSpot, getOneSpot } from '../../store/spots';
import "./EditSpot.css"
function EditSpotForm({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams()

  const spot = useSelector(state => state.spots.singleSpot)
  const currUser = useSelector(state => state.session.user)

  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [country, setCountry] = useState(spot.country);
  const [lat, setLat] = useState(spot.lat);
  const [lng, setLng] = useState(spot.lng);
  const [name, setName] = useState(spot.name);
  const [description, setDescription] = useState(spot.description);
  const [price, setPrice] = useState(spot.price);
  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getOneSpot(spotId))
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = []

    if (address.length === 0) validationErrors.push('Address is required');
    if (city.length === 0) validationErrors.push('City is required');
    if (state.length === 0) validationErrors.push('State is required')
    if (country.length === 0) validationErrors.push('Country is required');
    if (name.length === 0) validationErrors.push('Name is required');
    if (description.length === 0) validationErrors.push('Description is required');

    if (lat.length === 0) validationErrors.push('Latitude is required')
    if (lng.length === 0) validationErrors.push('Longitute is required')
    if (lat < -90 || lat > 90) validationErrors.push('Latitude must be a value in the range of -90 and 90');
    if (lng < -180 || lng > 180) validationErrors.push('Longitude must be a value in the range of -180 and 180');
    if (price.length === 0) validationErrors.push('Price is required')
    if (price < 0) validationErrors.push('Price must be greater than 0');

    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return;
    }
    //console.log('!!!!!!!!!!!!!!validationErrors', validationErrors)
    setErrors([]);

    const updatedSpot = { address, city, state, country, lat, lng, name, description, price }
    //console.log('!!!!!!!!!!!!!!addSpot', addedSpot)
    dispatch(updateSpot(updatedSpot, spotId)).then(
      async (res) => {
        //console.log('!!!!!!!!!!!!!!res', res)
        //const data = await res.json();
        //console.log('!!!!!!!!!!!!!!data', data)

        if (res && res.errors) {
          //console.log('!!!!!!!!!!!!!!errros', res.errors)
          setErrors(res.errors);
        } else {
          setShowModal(false)
          history.push(`/spots/${spotId}`)

        }
      }
    )


  }


  return (
    <div className="form-container">
      <div className="form-header">
        Update this spot
      </div>
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && (<div className="error-message">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>)}
        <div className="input-field-container">
          <div className="input-field">
            <label>
              <input
                type="text"
                placeholder='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <input
                type="text"
                value={city}
                placeholder='City'
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <input
                type="text"
                value={state}
                placeholder='State'
                onChange={(e) => setState(e.target.value)}
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <input
                type="text"
                value={country}
                placeholder='Country'
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <input
                type="number"
                value={lat}
                name="latitude"
                placeholder='Latitude'
                onChange={(e) => setLat(e.target.value)}

              />
            </label>
          </div>
          <div className="input-field">
            <label>
              <input
                type="number"
                value={lng}
                placeholder='Longitude'
                onChange={(e) => setLng(e.target.value)}

              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <input
                type="text"
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}

              />
            </label>
          </div>
          <div className="input-field">
            <label>
              <input
                type="text"
                value={price}
                placeholder='Price'
                onChange={(e) => setPrice(e.target.value)}

              />
            </label>
          </div>
          <div className="input-field text-area">
            <label>
              <textarea
                value={description}
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="submit-button">
        <button
          type="submit"
          disabled={isSubmitted && errors.length > 0}
        >
          Submit

        </button>
      </div>
      </form>


    </div>

  );
}


export default EditSpotForm;
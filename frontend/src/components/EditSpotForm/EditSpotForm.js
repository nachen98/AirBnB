
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./EditSpot.css"
import { updateSpot, getOneSpot } from '../../store/spots';


function EditSpotForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams()

  const spot = useSelector(state => state.spots.singleSpot)
  const currUser = useSelector(state => state.session.user)

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getOneSpot(spotId))
  }, [dispatch, spotId]);


  //this useEffect solves the refresh problem: when refreshing the page
  //the data populates in the form will stay in the form instead of disappearing
  //The effect updates the local state values for address, city, state, country, lat, lng, name, description, 
  //and price with the values from the spot object, so when the spot object changes, 
  //the local state values also change and re-render the component with updated information.
  //In other words, the useEffect hook acts as a bridge between the global state managed by
  // the useSelector hook and the local state managed by the useState hooks, 
  //ensuring that the local state always stays in sync with the global state.
  useEffect(() => {
    if (spot) {
      setAddress(spot.address || '');
      setCity(spot.city || '');
      setState(spot.state || '');
      setCountry(spot.country || '');
      setLat(spot.lat || '');
      setLng(spot.lng || '');
      setName(spot.name || '');
      setDescription(spot.description || '');
      setPrice(spot.price || '');
    }
  }, [spot]);


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

    setErrors([]);

    const updatedSpot = { address, city, state, country, lat, lng, name, description, price }

    dispatch(updateSpot(updatedSpot, spotId)).then(
      async (res) => {
        //console.log('!!!!!!!!!!!!!!res', res)
        //const data = await res.json();
        //console.log('!!!!!!!!!!!!!!data', data)

        if (res && res.errors) {

          setErrors(res.errors);
        } else {
          history.push(`/spots/${spotId}`)

        }
      }
    )


  }


  return (
    <div className="create-spot-form-container flx-col-justify-align-ctr ">
      <div className="create-spot-form-header">
        Update this spot
      </div>
      <form onSubmit={handleSubmit} className="spot-form-container">
        {errors.length > 0 && (<div className="signup-error-message">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>)}

        <input
          className="login-username-input"
          type="text"
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ borderBottom: 'none' }}
          required
        />

        <input
          className="signup-username-input"
          type="text"
          value={city}
          placeholder='City'
          onChange={(e) => setCity(e.target.value)}
          style={{ borderBottom: 'none' }}
          required
        />



        <input
          className="signup-username-input"
          type="text"
          value={state}
          placeholder='State'
          onChange={(e) => setState(e.target.value)}
          style={{ borderBottom: 'none' }}
          required
        />



        <input
          className="signup-username-input"
          type="text"
          value={country}
          placeholder='Country'
          onChange={(e) => setCountry(e.target.value)}
          style={{ borderBottom: 'none' }}
          required
        />


        <input
          className="signup-username-input"
          type="number"
          value={lat}
          name="latitude"
          placeholder='Latitude'
          onChange={(e) => setLat(e.target.value)}
          style={{ borderBottom: 'none' }}
          min='-90'
          max='90'
          required

        />


        <input
          className="signup-username-input"
          type="number"
          value={lng}
          placeholder='Longitude'
          onChange={(e) => setLng(e.target.value)}
          style={{ borderBottom: 'none' }}
          min='-180'
          max='180'
        />



        <input
          className="signup-username-input"
          type="text"
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          style={{ borderBottom: 'none' }}
          required
        />


        <input
          className="signup-username-input"
          type="number"
          value={price}
          placeholder='Price'
          onChange={(e) => setPrice(e.target.value)}
          style={{ borderBottom: 'none' }}
          min='0'
          required
        />


        <textarea
          className="text-area"
          value={description}
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
          required
        />


        <button
          className="spot-submit"
          type="submit"
          disabled={isSubmitted && errors.length > 0}
        >
          Submit

        </button>

      </form>


    </div>

  );
}


export default EditSpotForm;
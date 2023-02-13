
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./CreateSpot.css"
import { addSpot, addImage, getAllSpots } from '../../store/spots';

function CreateSpotForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const validUrls = ['jpg', 'jpeg', 'png', 'svg', 'gif', 'heic']

    let splittedUrl = imgUrl.split('/')
    let parsedUrl = splittedUrl[splittedUrl.length - 1].split('.')[1]

    const validationErrors = []

    if (address.length === 0) validationErrors.push('Address is required');
    if (city.length === 0) validationErrors.push('City is required');
    if (state.length === 0) validationErrors.push('State is required')
    if (country.length === 0) validationErrors.push('Country is required');
    if (name.length === 0) validationErrors.push('Name is required');
    if (description.length === 0) validationErrors.push('Description is required');
    if (!validUrls.includes(parsedUrl)) validationErrors.push('Please provide a valid image format')
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

    const addedSpot = { address, city, state, country, lat, lng, name, description, price }

    dispatch(addSpot(addedSpot)).then(
      async (res) => {

        let newSpot = res
        if (res && res.errors) {

          setErrors(res.errors);
        } else {

          dispatch(addImage(res.id, { preview: true, url: imgUrl })).then(
            async (res) => {
              const data = await res.json();
              if (data && data.errors) {
                setErrors(data.errors);
              } else {
                history.push(`/spots/${newSpot.id}`)
              }
            }
          )


        }
      }
    );
  };



  return (

    <div className="create-spot-form-container flx-col-justify-align-ctr ">
      <div className="create-spot-form-header">
        Create a Spot
      </div>
 
        <form onSubmit={handleSubmit} className="spot-form-container">
          {errors.length > 0 && (<div className="signup-error-message">

            {errors.map((error, idx) => <div key={idx}>{error}</div>)}

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
                  required
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
       
                <input
                  className="signup-username-input"
                  type="url"
                  value={imgUrl}
                  placeholder='Image Url'
                  onChange={(e) => setImgUrl(e.target.value)}
                  style={{ borderBottom: 'none' }}
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


    </div >



  );
}


export default CreateSpotForm;
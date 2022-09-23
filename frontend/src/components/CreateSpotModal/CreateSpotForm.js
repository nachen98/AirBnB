// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./CreateSpot.css"
import { addSpot, addImage, getAllSpots } from '../../store/spots';

function CreateSpotForm({setShowModal}) {
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

//   useEffect(() => {
//     dispatch(getAllSpots())
// }, []);

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
    if(lat.length === 0) validationErrors.push('Latitude is required')
    if(lng.length === 0) validationErrors.push('Longitute is required')
    if (lat < -90 || lat > 90) validationErrors.push('Latitude must be a value in the range of -90 and 90');
    if (lng < -180 || lng > 180) validationErrors.push('Longitude must be a value in the range of -180 and 180');
    if(price.length === 0) validationErrors.push('Price is required')
    if (price < 0) validationErrors.push('Price must be greater than 0');

    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return;
    }
    //console.log('!!!!!!!!!!!!!!validationErrors', validationErrors)
    setErrors([]);

    const addedSpot = { address, city, state, country, lat, lng, name, description, price }
    //console.log('!!!!!!!!!!!!!!addSpot', addedSpot)
    dispatch(addSpot(addedSpot)).then(
      async (res) => {
        console.log('!!!!!!!!!!!!!!res', res)
        //const data = await res.json();
        //console.log('!!!!!!!!!!!!!!data', data)
        let newSpot=res
        if (res && res.errors) {
          //console.log('!!!!!!!!!!!!!!errros', res.errors)
          setErrors(res.errors);
        } else{
          //console.log('###########imgUrl', imgUrl)
          dispatch(addImage(res.id, { preview: true, url: imgUrl })).then(
            async (res) => {
              const data = await res.json();
              if (data && data.errors) {
                setErrors(data.errors);
              } else{
                setShowModal(false)
                history.push(`/spots/${newSpot.id}`)
              }
            }
          )


        }
      }
    );
    


  };



  return (
    <div className="form-container">
      <div className="form-header">
        Create a Spot
      </div>
      <div className="form-body">
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="form-input-container">
          <label>
            <input
              type="text"
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          </div>
          
          <div className="form-input-container">
          <label>
            <input
              type="text"
              value={city}
              placeholder='City'
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          </div>
          
          <div className="form-input-container">
          <label>
            <input
              type="text"
              value={state}
              placeholder='State'
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          </div>

          <div className="form-input-container">
          <label>
            <input
              type="text"
              value={country}
              placeholder='Country'
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
            </div>
            
            <div className="form-input-container">
          <label>
            <input
              type="number"
              value={lat}
              name="latitude"
              placeholder ='Latitude'
              onChange={(e) => setLat(e.target.value)}
              // min='-90'
              // max='90'
            />
          </label>
            </div>
            <div className="form-input-container">
          <label> 
            <input
              type="number"
              value={lng}
              placeholder = 'Longitude'
              onChange={(e) => setLng(e.target.value)}
              // min='-180'
              // max='180'
            />
          </label>
            </div>

            <div className="form-input-container">
          <label>
            <input
              type="text"
              value={name}
              placeholder = 'Name'
              onChange={(e) => setName(e.target.value)}
            
            />
          </label>
            </div>
            <div className="form-input-container">
          <label>
            <input
              type="text"
              value={price}
              placeholder = 'Price'
              onChange={(e) => setPrice(e.target.value)}
              // min='0'
            />
          </label>
            </div>
            <div className="form-input-container text-area">
          <label>
            <textarea
              value={description}
              placeholder = 'Description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          </div>

          <div className="form-input-container">
          <label>
            <input
              type="url"
              value={imgUrl}
              placeholder = 'Image Url'
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </label>
            </div>

          <button 
          type="submit"
          disabled={isSubmitted && errors.length > 0}
          >
            Submit
          
          </button>       
  
        </form>
      </div>

    </div>

  );
}


export default CreateSpotForm;

import { PlacesContext } from "../context/PlacesContext";
import { useContext } from "react";
import {useState, useEffect} from "react";
  
const Form  = () => {

    const {getUrl} = useContext(PlacesContext) ;

    const [longitude,setLongitude] = useState("");
    const [latitude,setLatitude] = useState("");
    const [radius,setRadius] = useState("");

    let inputs = document.querySelectorAll('input');
    const handleSubmit = (e) =>{
        e.preventDefault();
        getUrl(longitude, latitude, radius)
        inputs.forEach(input => input.value='');

    }

    return (
        <>
        
            <div className="container">
                <form onSubmit={handleSubmit} className="mb-5">
                    <div className="d-flex justify-content-center align-items-center mt-5 h3">
                        <p className="form__text">FIND NEARBY PLACES</p>
                    </div>

                    <div className="row">
 
                        <div className="form-group col">
                            <label htmlFor="Latitude">Latitude</label>
                            <input type="number" step="any" id="Latitude" className="form-control" onChange={e => setLatitude(e.target.value)} required/>   
                        </div>

                        <div className="form-group col">
                            <label htmlFor="Longitude">Longitude</label>
                            <input type="number" step="any" id="Longitude" className="form-control" onChange={e => setLongitude(e.target.value)} required/>
                        </div>

                        <div className="form-group col">
                            <label htmlFor="Radius">Radius</label>
                            <input type="number" id="Radius" className="form-control" onChange={e => setRadius(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                            <button type="submit" className="btn btn-danger">SHOW PLACES</button>
                    </div>
                </form>
            </div>


            
        </>
  );
};

export default Form ;

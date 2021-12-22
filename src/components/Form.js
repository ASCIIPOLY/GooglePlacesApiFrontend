
import axios from "axios";
import {useState, useEffect} from "react";
  


const Form  = () => {

    const [datas, setDatas] = useState([])

    const [url,setUrl] = useState("")

    useEffect(() => {
        if(url !== "") {
            axios.get(url)
            .then(res => {
                console.log(JSON.parse(res.data.results))
                setDatas(JSON.parse(res.data.results))
            })
            .catch(err => console.log(err))
        }

    }, [url])

    const [longitude,setLongitude] = useState("");
    const [latitude,setLatitude] = useState("");
    const [radius,setRadius] = useState("");

    let inputs = document.querySelectorAll('input');
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUrl(`http://localhost:8070/?longitude=${longitude}&latitude=${latitude}&radius=${radius}`)
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
                            <label htmlFor="Longitude">Longitude</label>
                            <input type="number" step="any" id="Longitude" className="form-control" onChange={e => setLongitude(e.target.value)} required/>
                        </div>

                        <div className="form-group col">
                            <label htmlFor="Latitude">Latitude</label>
                            <input type="number" step="any" id="Latitude" className="form-control" onChange={e => setLatitude(e.target.value)} required/>   
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

                {datas.map((data, index) =>(
                <div className="d-flex justify-content-center align-items-center h5" key={index}>{data.name}</div>
                 ))}
            </div>


            
        </>
  );
};

export default Form ;

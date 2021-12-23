import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlacesContext = createContext();

const PlacesContextProvider = (props) => {

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

    const [longitudeCenter,setLongitudeCenter] = useState(28.978359);
    const [latitudeCenter,setLatitudeCenter] = useState(41.008240);

    const getUrl = (longitude, latitude, radius) => {
        setUrl(`http://localhost:8070/?longitude=${longitude}&latitude=${latitude}&radius=${radius}`)
        setLongitudeCenter(parseFloat(longitude))
        setLatitudeCenter(parseFloat(latitude))
    }
        

    return (
        <PlacesContext.Provider value={{datas, getUrl, longitudeCenter, latitudeCenter}}>
            {props.children}
        </PlacesContext.Provider>
    )
}

export default PlacesContextProvider;


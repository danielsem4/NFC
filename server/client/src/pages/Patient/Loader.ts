import axios from "axios";
import { LoaderFunctionArgs } from "react-router-dom";


const patientLoader = ( {params}: LoaderFunctionArgs ) => {
    return async() => {
        const { patientId } = params
        const res = await axios.get(`/api/patients/${patientId}`)
        return res.data 
    } 
}

export default patientLoader;
import axios from "axios";

interface PatientLoaderType{
    params: {
        patientId: string}
}

const patientLoader = async( {params}: PatientLoaderType ) => {
    const { patientId } = params
    const res = await axios.get(`/api/patients/${patientId}`)
    return res.data 
}

export default patientLoader;
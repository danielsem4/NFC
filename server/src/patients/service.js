const modules = require("../modules");
const { Patients } = require("../modules");


const getPatientData = async(req, res) => {
    try{
        const { patientId } = req.params
        const patient = await Patients.findByPk(patientId)

        return res.status(200).json(patient)
        

    }catch(error){
        console.log(error);
        return res.status(500).end()
    }
}

module.exports = { getPatientData }
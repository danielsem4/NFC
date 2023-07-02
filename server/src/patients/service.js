const modules = require("../models");
const { Patients } = require("../models");

const getPatientData = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await Patients.findByPk(patientId);

    return res.status(200).json(patient);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

module.exports = { getPatientData };

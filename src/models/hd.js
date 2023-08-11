const dbPool = require('../config/database')
const bcrypt = require("bcryptjs")

const getAllhd = () => {
    const sqlQuery = 'SELECT id, name, phone, address, current_address, marital, family_dependence, ktp, npwp, education, sertification, birthdate, birthplace, emergency_contact, ec_name, ec_status, work_experience, previous_industry, cv FROM hd ';

    return dbPool.execute(sqlQuery)
}
//Sign up
const createNewhd = (body) => {
    // const encryptedPassword = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `INSERT INTO hd (name, phone, address, current_address, marital, family_dependence, ktp, npwp, education, sertification, birthdate, birthplace, emergency_contact, ec_name, ec_status, work_experience, previous_industry, cv) VALUES ('${body.name}', '${body.phone}', '${body.address}', '${body.current_address}', '${body.marital}', '${body.family_dependence}', '${body.ktp}', '${body.npwp}', '${body.education}', '${body.sertification}', '${body.birthdate}', '${body.birthplace}', '${body.emergency_contact}', '${body.ec_name}', '${body.ec_status}', '${body.work_experience}', '${body.previous_industry}', '${body.cv}')`

    return dbPool.execute(sqlQuery);
}

//Change Password
const updatehd = (body, id) => {
    // const password = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `UPDATE hd SET name='${body.name}', phone='${body.phone}', address='${body.address}', current_address='${body.current_address}', marital='${body.marital}', family_dependence='${body.family_dependence}', ktp='${body.ktp}', npwp='${body.npwp}', education='${body.education}', sertification='${body.sertification}', birthdate='${body.birthdate}', birthplace='${body.birthplace}', emergency_contact='${body.emergency_contact}', ec_name='${body.ec_name}', ec_status='${body.ec_status}', work_experience='${body.work_experience}', previous_industry='${body.previous_industry}', cv='${body.cv}' WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

const deletehd = (id) => {
    const sqlQuery = `DELETE FROM hd WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAllhd,
    createNewhd,
    updatehd,
    deletehd,
}
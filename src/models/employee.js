const dbPool = require('../config/database')
const bcrypt = require("bcryptjs")

const getAllEmployee = () => {
    const sqlQuery = 'SELECT id, name, email, phone, address, curent_address, marital, family_dependence, ktp, npwp, education, certification, birthdate, birthplace, emergency_contact, ec_name, ec_status, work_experience, previous_industri, cv FROM employee';

    return dbPool.execute(sqlQuery)
}
//Sign up
const createNewEmployee = (body) => {
    // const encryptedPassword = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `INSERT INTO employee ( name, email, phone, address, curent_address, marital, family_dependence, ktp, npwp, education, certification, birthdate, birthplace, emergency_contact, ec_name, ec_status, work_experience, previous_industri, cv ) VALUES ('${body.name}', '${body.email}', '${body.phone}', '${body.address}', '${body.curent_address}', '${body.marital}', '${body.family_dependence}', '${body.ktp}', '${body.npwp}', '${body.education}', '${body.certification}', '${body.birthdate}', '${body.birthplace}', '${body.emergency_contact}', '${body.ec_name}', '${body.ec_status}', '${body.work_experience}', '${body.previous_industri}', '${body.cv}')`

    return dbPool.execute(sqlQuery);
}

//Change Password
const updateEmployee = (body, id) => {
    // const password = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `UPDATE employee SET name='${body.name}', email='${body.email}', phone='${body.phone}', address='${body.address}', curent_address='${body.curent_address}', marital='${body.marital}', family_dependence='${body.family_dependence}', ktp='${body.ktp}', npwp='${body.npwp}', education='${body.education}', certification='${body.certification}', birthdate='${body.birthdate}', birthplace='${body.birthplace}', emergency_contact='${body.emergency_contact}', ec_name='${body.ec_name}', ec_status='${body.ec_status}', work_experience='${body.work_experience}', previous_industri='${body.previous_industri}', cv='${body.cv}' WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

const deleteEmployee = (id) => {
    const sqlQuery = `DELETE FROM employee WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAllEmployee,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
}
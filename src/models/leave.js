const dbPool = require('../config/database')
const bcrypt = require("bcryptjs")

const getAllLeave = () => {
    const sqlQuery = 'SELECT name, position, client, type_leave, date, leave_period, reason, phone, emergency_contact FROM leaves';

    return dbPool.execute(sqlQuery)
}
//Sign up
const createNewLeave = (body) => {
    // const encryptedPassword = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `INSERT INTO leaves (name, position, client, type_leave, date, leave_period, reason, phone, emergency_contact) VALUES ('${body.name}', '${body.position}', '${body.client}', '${body.type_leave}', '${body.date}', '${body.leave_period}', '${body.reason}', '${body.phone}', '${body.emergency_contact}')`

    return dbPool.execute(sqlQuery);
}   

//Change Password
const updateLeave = (body, id) => {
    // const password = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `UPDATE  leaves SET name='${body.name}', position='${body.position}', client='${body.client}', type_leave='${body.type_leave}', date='${body.date}', leave_period='${body.leave_period}', reason='${body.reason}', phone='${body.phone}', emergency_contact='${body.emergency_contact}' WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

const deleteLeave = (id) => {
    const sqlQuery = `DELETE FROM leaves WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAllLeave,
    createNewLeave,
    updateLeave,
    deleteLeave,
}
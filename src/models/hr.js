const dbPool = require('../config/database')
const bcrypt = require("bcryptjs")

const getAllhr = () => {
    const sqlQuery = 'SELECT employee_id, name, date_join, end_contract, direct_manager, immediate_manager, dept, employment_status, project_history, next_assignment, resign_date, reason, email_pgi, country, position, status FROM hr';

    return dbPool.execute(sqlQuery)
}
//Sign up
const createNewhr = (body) => {
    // const encryptedPassword = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `INSERT INTO hr (name, date_join, end_contract, direct_manager, immediate_manager, dept, employment_status, project_history, next_assignment, resign_date, reason, email_pgi, country, position, status) VALUES ('${body.name}', '${body.date_join}', '${body.end_contract}', '${body.direct_manager}', '${body.immediate_manager}', '${body.dept}', '${body.employment_status}', '${body.project_history}', '${body.next_assignment}', '${body.resign_date}', '${body.reason}', '${body.email_pgi}', '${body.country}', '${body.position}', '${body.status}')`

    return dbPool.execute(sqlQuery);
}

//Change Password
const updatehr = (body, id) => {
    // const password = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `UPDATE  hr SET name='${body.name}', date_join='${body.date_join}', end_contract='${body.end_contract}', direct_manager='${body.direct_manager}', immediate_manager='${body.immediate_manager}', dept='${body.dept}', employment_status='${body.employment_status}', project_history='${body.project_history}', next_assignment='${body.next_assignment}', resign_date='${body.resign_date}', reason='${body.reason}', email_pgi='${body.email_pgi}', country='${body.country}', position='${body.position}', status='${body.status}' WHERE employee_id='${id}'`
    console.log(sqlQuery)
    return dbPool.execute(sqlQuery);
}

const deletehr = (id) => {
    const sqlQuery = `DELETE FROM hr WHERE employee_id='${id}'`

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAllhr,
    createNewhr,
    updatehr,
    deletehr,
}
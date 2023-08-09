const dbPool = require('../config/database')

const authLogin = (body) => {
    
    const sqlQuery = `SELECT id,name,email from users where email='${body.email}' and password='${body.password}'`;

    return dbPool.execute(sqlQuery)
}

module.exports = {
    authLogin
}
const dbPool = require('../config/database')

const authLogin = (body) => {
    
    const sqlQuery = `SELECT id,name,email,password from users where email='${body.email}'`;

    return dbPool.execute(sqlQuery)
}

module.exports = {
    authLogin
}
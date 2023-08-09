const dbPool = require('../config/database')
const bcrypt = require("bcryptjs")

const getAllUsers = () => {
    const sqlQuery = 'SELECT id,name,email FROM users';

    return dbPool.execute(sqlQuery)
}
//Sign up
const createNewUser = (body) => {
    const encryptedPassword = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `INSERT INTO users (name, email,password) VALUES ('${body.name}', '${body.email}', '${encryptedPassword}')`

    return dbPool.execute(sqlQuery);
}

//Change Password
const updateUser = (body, id) => {
    const password = bcrypt.hashSync(body.password, 8)
    const sqlQuery = `UPDATE  users SET name='${body.name}', email='${body.email}', password='${password}' WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

const deleteUser = (id) => {
    const sqlQuery = `DELETE FROM users WHERE id='${id}'`

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}
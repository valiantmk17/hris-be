const dbPool = require('../config/database')

const getAllUsers = () => {
    const sqlQuery = 'SELECT * FROM users';

    return dbPool.execute(sqlQuery)
}

const createNewUser = (body) => {
    const sqlQuery = `INSERT INTO users (name, email) VALUES ('${body.name}', '${body.email}')`

    return dbPool.execute(sqlQuery);
}

const updateUser = (body, id) => {
    const sqlQuery = `UPDATE  users SET name='${body.name}', email='${body.email}' WHERE id='${id}'`

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
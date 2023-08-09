const userModels = require('../models/users')
const response = require('../middleware/response')
const getAllUsers =  async (req, res) => {
    try {
        const [dataDB] = await userModels.getAllUsers();
    
        res.status(200).json(response.getStandardResponse(
            res.statusCode,
            "GET all user sukses",
            dataDB
        ))
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }

}

const createNewUser = async (req, res) => {
    try {
        await userModels.createNewUser(req.body);
    
        res.json({
            message: "CREATE new user success",
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const {body} = req;

    try {
        await userModels.updateUser(body, id)

        res.json({
            message: "UPDATE user success",
            body: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await userModels.deleteUser(id);
        res.json({
            message: "DELETE user ID "+id+" success",
            body: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}
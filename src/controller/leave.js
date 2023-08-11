const leaveModels = require('../models/leave')
const response = require('../middleware/response')
const getAllLeave =  async (req, res) => {
    try {
        const [dataDB] = await leaveModels.getAllLeave();
    
        res.status(200).json(response.getStandardResponse(
            res.statusCode,
            "GET all leave success",
            dataDB
        ))
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }

}

const createNewLeave = async (req, res) => {
    try {
        await leaveModels.createNewLeave(req.body);
    
        res.json({
            message: "CREATE new leave success",
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const updateLeave = async (req, res) => {
    const id = req.params.id;
    const {body} = req;

    try {
        await leaveModels.updateLeave(body, id)

        res.json({
            message: "UPDATE leave success",
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

const deleteLeave = async (req, res) => {
    const id = req.params.id;

    try {
        await leaveModels.deleteleave(id);
        res.json({
            message: "DELETE leave ID "+id+" success",
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
    getAllLeave,
    createNewLeave,
    updateLeave,
    deleteLeave,
}
const hrModels = require('../models/hr')
const response = require('../middleware/response')
const getAllhr =  async (req, res) => {
    try {
        const [dataDB] = await hrModels.getAllhr();
    
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

const createNewhr = async (req, res) => {
    try {
        await hrModels.createNewhr(req.body);
    
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
const updatehr = async (req, res) => {
    const id = req.params.id;
    const {body} = req;

    try {
        await hrModels.updatehr(body, id)

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

const deletehr = async (req, res) => {
    const id = req.params.id;

    try {
        await hrModels.deletehr(id);
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
    getAllhr,
    createNewhr,
    updatehr,
    deletehr,
}
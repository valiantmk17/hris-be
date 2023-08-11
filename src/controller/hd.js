const hdModels = require('../models/hd')
const response = require('../middleware/response')
const getAllhd =  async (req, res) => {
    try {
        const [dataDB] = await hdModels.getAllhd();
    
        res.status(200).json(response.getStandardResponse(
            res.statusCode,
            "GET all user success",
            dataDB
        ))
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }

}

const createNewhd = async (req, res) => {
    try {
        await hdModels.createNewhd(req.body);
    
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

const updatehd = async (req, res) => {
    const id = req.params.id;
    const {body} = req;

    try {
        await hdModels.updatehd(body, id)

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

const deletehd = async (req, res) => {
    const id = req.params.id;

    try {
        await hdModels.deletehd(id);
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
    getAllhd,
    createNewhd,
    updatehd,
    deletehd,
}
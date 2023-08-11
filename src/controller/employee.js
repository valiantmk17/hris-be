const employeeModels = require('../models/employee')
const response = require('../middleware/response')
const getAllEmployee =  async (req, res) => {
    try {
        const [dataDB] = await employeeModels.getAllEmployee();
    
        res.status(200).json(response.getStandardResponse(
            res.statusCode,
            "GET all employee sukses",
            dataDB
        ))
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }

}

const createNewEmployee = async (req, res) => {
    try {
        await employeeModels.createNewEmployee(req.body);
    
        res.json({
            message: "CREATE new employee success",
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

const updateEmployee = async (req, res) => {
    const id = req.params.id;
    const {body} = req;

    try {
        await employeeModels.updateEmployee(body, id)

        res.json({
            message: "UPDATE employee success",
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

const deleteEmployee = async (req, res) => {
    const id = req.params.id;

    try {
        await employeeModels.deleteEmployee(id);
        res.json({
            message: "DELETE employee ID "+id+" success",
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
    getAllEmployee,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
}
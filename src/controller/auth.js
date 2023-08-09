const config = require("../config/auth");
const authModel = require('../models/auth')
const response = require("../middleware/response")

var jwt = require("jsonwebtoken");
const { application } = require("express");
const getUserLogin =  async (req, res) => {
    try {
        const [dataDB] = await authModel.authLogin(req.body);

        console.log(dataDB.length)
        if (dataDB.length>0){
            const user = dataDB[0]
              
            const token = jwt.sign({ id: user.id },
                config.secret,
                {
                  algorithm: config.algorithm,
                  allowInsecureKeySizes: true,
                  expiresIn: config.expired, // 24 hours
                });    
                
            
            res.status(200).json(
                response.getStandardResponse(
                    res.statusCode,
                    "Login Sukses",
                    {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        accessToken: token
                    }
                )
            );
        }else{
            res.status(500).json(response.getStandardResponse(
                res.statusCode,
                "Invalid username or password",
                null
            ))        
        }
        
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }

}


module.exports = {
    getUserLogin,
}
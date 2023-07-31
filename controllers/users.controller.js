const userService = require("../services/users.service")

exports.register = (req, res, next) => {
    const data = {
        firstName:  req.body.firstName,
        lastName:   req.body.lastName,
        email:      req.body.email,
        password:   req.body.password,
    }

    userService.register(data, (error, results) => {
        if(error) {
            console.log(error)
            return res.status(400).send({success: 0, data: "Bad Request"})
        }
        return res.status(200).send({
            success: 1,
            data, results
        })
    })
}

exports.login = (req, res, next) => {
    const data = {
        email:      req.body.email,
        password:   req.body.password,
    }

    userService.login(data, (error, results) => {
        if(error) {
            console.log(error)
            return res.status(400).send({success: 0, data: "Bad Request"})
        }
        return res.status(200).send({
            success: 1,
            data, results
        })
    })
}

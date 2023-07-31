const db = require("../config/db.config")

exports.register = (data, callback) => {
    db.query(
        `insert into users (name, email, password) values (?, ?, ?)`,
        [data.firstName + " " + data.lastName, data.email, data.password],
        (error, results, fields) => {
            if(error) {
                return callback(error)
            }
            return callback(null, `Registration successfull`)
        }
    )
}
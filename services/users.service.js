const db = require("../config/db.config");

exports.register = (data, callback) => {
  db.query(
    `insert into users (name, email, password) values (?, ?, ?)`,
    [data.firstName + " " + data.lastName, data.email, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successfull`);
    }
  );
};

exports.login = (data, callback) => {
  db.query(
    `select * from users where email = ? and password = ?`,
    [data.email, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      } else if (results.length > 0) {
        return callback(null, `Login successfull`);
      } else {
        return callback(null, `Invalid Credentials`);
      }
    }
  );
};

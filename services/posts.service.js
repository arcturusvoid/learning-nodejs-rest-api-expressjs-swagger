const db = require("../config/db.config");

exports.addPost = (data, callback) => {
  db.query(
    `insert into posts (content, user_id) values (?, ?)`,
    [data.content, data.userId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Post Added!`);
    }
  );
};

exports.getAllPost = (data, callback) => {
  db.query(
    `select p.id, p.content, p.user_id, p.created_at, u.name from posts p inner join users u on p.user_id = u.id`,
    [],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.deletePost = (data, callback) => {
  db.query(
    `delete from posts where id = ?`,
    [data.postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      } else if (results.affectedRows === 1) {
        return callback(null, `Post Deleted!`);
      } else {
        return callback(new Error("Invalid Post Id"));
      }
    }
  );
};

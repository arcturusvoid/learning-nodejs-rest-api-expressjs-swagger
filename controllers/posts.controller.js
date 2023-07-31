const postService = require("../services/posts.service");

exports.addPost = (req, res, next) => {
  const data = {
    content: req.body.content,
    userId: req.body.userId,
  };

  postService.addPost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request" });
    }
    return res.status(200).send({
      success: 1,
      data,
      results,
    });
  });
};

exports.getAllPost = (req, res, next) => {
  const data = {};
  postService.getAllPost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request" });
    }
    return res.status(200).send({
      success: 1,
      results,
    });
  });
};


exports.deletePost = (req, res, next) => {
  const data = {
    postId: req.query.postId
  };
  postService.deletePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad Request" });
    }
    return res.status(200).send({
      success: 1,
      results,
    });
  });
};

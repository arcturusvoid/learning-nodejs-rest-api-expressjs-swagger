const postsController = require("../controllers/posts.controller");

var express = require("express");

var router = express.Router();

router.post("/add-post", postsController.addPost);
/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - content
 *                 - userId
 *              properties:
 *                  content:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is sample post
 *                  userId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/get-all-post", postsController.getAllPost);
/**
 * @swagger
 * /posts/get-all-post:
 *   get:
 *      description: Used to get all posts
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/delete-post", postsController.deletePost);
/**
 * @swagger
 * /posts/delete-post:
 *   delete:
 *      description: Used to delete post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            description: Post id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;

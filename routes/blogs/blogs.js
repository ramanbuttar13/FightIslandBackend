const express = require("express");
const router = express.Router();
const blogsController = require('../../controllers/blogs.controller')
const checkToken = require('../../middleware/auth').checkToken

router.post(
  "/blog",
  checkToken,
  blogsController.createBlog
);

module.exports = router;
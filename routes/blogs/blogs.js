const express = require("express");
const router = express.Router();
const blogsController = require('../../controllers/blogs.controller')
const checkToken = require('../../middleware/auth').checkToken

// add a blog for a user
router.post(
  "/add-blog",
  checkToken,
  blogsController.createBlog
);

// update only the blog status for a user 
router.put(
  "/blog-status/:blog_id",
  checkToken,
  blogsController.updateblogStatus
);

// get blog details for a user (view only, for the website)
router.get(
  "/blog/:blog_id",
  blogsController.getBlogDetails
);

// all blogs listing 
router.post(
  "/blogs",
  blogsController.getAllBlogs
);


module.exports = router;
const blogsService = require("../services/blogs.service");

exports.createBlog = async (req, res) => {
  let result = "";
  try {
    result = await blogsService.createBlog(req.body, req.user);
  } catch (error) {
    console.log(error);
  } finally {
    res.status(200).send({
      statusCode: 200,
      data: result
    });
  }
};

exports.updateblogStatus = async (req, res) => {
  let result = "";
  try {
    result = await blogsService.updateblogStatus(
      req.body.active,
      req.user.id,
      req.params.blog_id
    );
  } catch (error) {
    console.log(error);
  } finally {
    res.status(200).send({
      statusCode: 200,
      data: result
    });
  }
};

exports.getBlogDetails = async (req, res) => {
  let result = "";
  try {
    result = await blogsService.getBlogDetails(req.params.blog_id);
  } catch (error) {
    console.log(error);
  } finally {
    res.status(200).send({
      statusCode: 200,
      data: result
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  let result = "";
  try {
    result = await blogsService.getAllBlogs(req.body);
  } catch (error) {
    console.log(error);
  } finally {
    res.status(200).send({
      statusCode: 200,
      data: result
    });
  }
};

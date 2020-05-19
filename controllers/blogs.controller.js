const blogsService = require("../services/blogs.service");
/*
exports.getBlogData = async (req, res) => {  
  let result = "";
  try {
    result = await blogsService.getBlogData();
    // result = {
    //   success: "its all subjective, test it"
    // };
  } catch (error) {
    // errorMessageObj.errorMessage(req, res, error);
  } finally {
    res.status(200).send({
      statusCode: 200,
      data: result
    });
  }
};*/

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

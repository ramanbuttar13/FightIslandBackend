const usersService = require("../services/users.service");

// TODO: implement bcrypt for passwords
exports.login = async (req, res) => {
  let result;
  try {
    result = await usersService.login(req.body);
  } catch (error) {
  } finally {
    result
      ? res.status(200).send({
          statusCode: 200,
          data: result
        })
      : res.status(400).send({
          statusCode: 400,
          data: {},
          message: "Error in login"
        });
  }
};

exports.userStats = async (req, res) => {
  let result;
  try {
    result = await usersService.userStats(req.user);
  } catch (error) {
  } finally {
    result
      ? res.status(200).send({
          statusCode: 200,
          data: result
        })
      : res.status(400).send({
          statusCode: 400,
          data: {},
          message: "Error in geting user stats"
        });
  }
};

exports.userBlogs = async (req, res) => {
  let result;
  try {
    result = await usersService.userBlogs(req.body, req.user);
  } catch (error) {
  } finally {
    result
      ? res.status(200).send({
          statusCode: 200,
          data: result
        })
      : res.status(400).send({
          statusCode: 400,
          data: {},
          message: "Error in geting user blogs"
        });
  }
};

exports.updateUserProfile = async (req, res) => {
  let result = {};
  try {
    result = await usersService.updateUserProfile(req.body, req.user);
  } catch (error) {
    console.log(error);
  } finally {
    res.status(200).send({
      statusCode: 200,
      data: result
    });
  }
};

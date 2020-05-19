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

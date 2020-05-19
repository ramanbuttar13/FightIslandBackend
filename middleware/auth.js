const jwt = require("jsonwebtoken");
const db = require("../models");

exports.checkToken = async (req, res, next) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(" ");
    token = token[1];
    try {
      var decoded = jwt.verify(token, "mayweather");
    } catch (err) {
      res.status(400).send({
        success: false,
        message: "Invalid Token"
      });
    } finally {
      if (decoded) {
        const user = await db.user.findOne({
          where: { id: decoded["id"] },
          raw: true
        });
        req.user = user;
        next();
      } else {
        res.status(400).send({
          success: false,
          message: "Error Decoding Token"
        });
      }
    }
  } else {
    res.status(400).send({
      success: false,
      message: "Auth Token not supplied"
    });
  }
};

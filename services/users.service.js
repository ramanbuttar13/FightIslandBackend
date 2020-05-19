const db = require("../models");
const jwt = require("jsonwebtoken");

// TODO: move token secret to config
module.exports = {
  login: async data => {
   
    let result = "";
    result = await db.user.findOne({
      where: {
        username: data.username,
        password: data.password
      },
      raw: true
    });
    if (result) {
      var token = jwt.sign(
        {
          username: result["username"],
          id: result["id"]
        },
        "mayweather"
      );
      return {
          token
      };
    } else {
      return false
    }
    
  }
};

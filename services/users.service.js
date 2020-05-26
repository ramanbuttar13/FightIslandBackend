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
      return false;
    }
  },
  userStats: async user => {
    // TODO: optimize, aggregation
    let result = {};
    result = await db.user.findOne({
      where: {
        id: user.id
      },
      include: db.blog
    });

    if (
      result &&
      result.dataValues &&
      result.dataValues.blogs &&
      result.dataValues.blogs.length
    ) {
      const blogsLength = result.dataValues.blogs.length;
      result.dataValues.blogs = {
        totalBlogs: blogsLength
      };
    }
    return result;
  },
  userBlogs: async (data, user) => {
    // TODO: optimize, aggregation
    let result = {};
    const page = data.page ? parseInt(data.page) : 1;
    const limit = data.limit ? parseInt(data.limit) : 10;
    const offset = data.page ? (page - 1) * limit : 0;
    result = await db.blog.findAll({
      where: {
        user_id: user.id
      },
      limit,
      offset
    });

    return result;
  },
  updateUserProfile: async (data, user) => {
    // TODO: optimize, aggregation
    let result = {};
    const userProfile = await db.user_profile.findOne({
      where: { user_id: user.id }
    });
    if (userProfile) {
      result = await db.user_profile.update(
        {
          firstname: data.firstname,
          middlename: data.middlename,
          lastname: data.lastname,
          address: data.address,
          username: data.username,
          user_id: user.id
        },
        {
          where: {
            user_id: user.id
          }
        }
      );
    } else {
      result = await db.user_profile.create({
        firstname: data.firstname,
        middlename: data.middlename,
        lastname: data.lastname,
        address: data.address,
        username: data.username,
        user_id: user.id
      });
    }

    return result;
  }
};

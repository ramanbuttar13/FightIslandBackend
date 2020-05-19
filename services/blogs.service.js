const db = require("../models");

module.exports = {
  getBlogData: async id => {
    let result = "";
    result = await db.blog.findAndCountAll();
    return result;
  },
  createBlog: async (blogData, user) => {
    let result = "";
    result = await db.blog.create({...blogData, user_id: user.id});
    return result;
  }
};

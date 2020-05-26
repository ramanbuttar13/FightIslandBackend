const db = require("../models");

module.exports = {
  createBlog: async (blogData, user) => {
    let result = "";
    result = await db.blog.create({ ...blogData, user_id: user.id });
    return result;
  },
  updateblogStatus: async (status, userId, blogId) => {
    let result = "";
    result = await db.blog.update(
      { active: status },
      {
        where: {
          id: blogId
        }
      }
    );
    return result;
  },
  getBlogDetails: async blogId => {
    let result = "";
    result = await db.blog.findAll({
      where: {
        id: blogId
      },
      include: [
        {
          model: db.user
        }
      ]
    });
    return result;
  },
  getAllBlogs: async data => {
    let result = "";
    const page = data.page ? parseInt(data.page) : 1;
    const limit = data.limit ? parseInt(data.limit) : 10;
    const offset = data.page ? (page - 1) * limit : 0;

    result = await db.blog.findAll({
      limit,
      offset
    });
    return result;
  }
};

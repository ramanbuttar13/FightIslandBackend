'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog_tag = sequelize.define('blog_tag', {
    blog_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER,
    deletedAt: DataTypes.STRING
  }, {});
  blog_tag.associate = function(models) {
    // associations can be defined here
  };
  return blog_tag;
};
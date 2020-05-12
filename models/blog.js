'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('blog', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    active: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    deletedAt: DataTypes.INTEGER
  }, {});
  blog.associate = function(models) {
    // associations can be defined here
  };
  return blog;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    blog_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    comment: DataTypes.STRING,
    deletedAt: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const replies = sequelize.define('replies', {
    comment_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    deletedAt: DataTypes.INTEGER
  }, {});
  replies.associate = function(models) {
    // associations can be defined here
  };
  return replies;
};
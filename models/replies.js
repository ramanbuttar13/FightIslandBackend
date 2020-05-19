'use strict';
module.exports = (sequelize, DataTypes) => {
  const replies = sequelize.define('replies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
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
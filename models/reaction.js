'use strict';
module.exports = (sequelize, DataTypes) => {
  const reaction = sequelize.define('reaction', {
    reaction: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    blog_id: DataTypes.INTEGER,
    deletedAt: DataTypes.INTEGER
  }, {});
  reaction.associate = function(models) {
    // associations can be defined here
  };
  return reaction;
};
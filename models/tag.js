'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define('tag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    tag: DataTypes.STRING,
    description: DataTypes.STRING,
    deletedAt: DataTypes.INTEGER
  }, {});
  tag.associate = function(models) {
    // associations can be defined here
  };
  return tag;
};
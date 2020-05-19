'use strict';
module.exports = (sequelize, DataTypes) => {
  const flag = sequelize.define('flag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    blog_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    deletedAt: DataTypes.STRING
  }, {});
  flag.associate = function(models) {
    // associations can be defined here
  };
  return flag;
};
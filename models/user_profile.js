'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_profile = sequelize.define('user_profile', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    firstname: DataTypes.STRING,
    middlename: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    profile_picture: DataTypes.INTEGER,
    deletedAt: DataTypes.INTEGER
  }, {});
  user_profile.associate = function(models) {
    // associations can be defined here
  };
  return user_profile;
};
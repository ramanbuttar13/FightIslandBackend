'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_profile = sequelize.define('user_profile', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    middlename: {
      allowNull: true,
      type: DataTypes.STRING
    },
    lastname: {
      allowNull: true,
      type: DataTypes.STRING
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    address: {
      allowNull: true,
      type: DataTypes.STRING
    },
    profile_picture: {
      allowNull: true,
      type: DataTypes.STRING
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
  }, {});
  user_profile.associate = function(models) {
    // associations can be defined here
  };
  return user_profile;
};
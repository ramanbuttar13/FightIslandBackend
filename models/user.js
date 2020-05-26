"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phone: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.INTEGER
      }
    },
    { timestamps: true }
  );
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.blog, { foreignKey: "user_id" });
  };
  return user;
};

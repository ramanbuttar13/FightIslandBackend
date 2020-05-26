"use strict";
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define(
    "blog",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      active: {
        allowNull: false,
        type: DataTypes.STRING
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.INTEGER
      }
    },
    { timestamps: true }
  );
  blog.associate = function(models) {
    // associations can be defined here
    blog.belongsTo(models.user, { foreignKey: "user_id" });
  };
  return blog;
};

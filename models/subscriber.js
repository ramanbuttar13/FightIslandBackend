'use strict';
module.exports = (sequelize, DataTypes) => {
  const subscriber = sequelize.define('subscriber', {
    type: DataTypes.STRING,
    means: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    blog_id: DataTypes.STRING,
    deletedAt: DataTypes.STRING
  }, {});
  subscriber.associate = function(models) {
    // associations can be defined here
  };
  return subscriber;
};
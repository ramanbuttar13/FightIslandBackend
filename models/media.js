'use strict';
module.exports = (sequelize, DataTypes) => {
  const media = sequelize.define('media', {
    content: DataTypes.STRING,
    type: DataTypes.STRING,
    host: DataTypes.STRING,
    host_id: DataTypes.INTEGER,
    deletedAt: DataTypes.STRING
  }, {});
  media.associate = function(models) {
    // associations can be defined here
  };
  return media;
};
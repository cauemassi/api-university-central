'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class University extends Model {
    static associate(models) {
      University.hasMany(models.User, {foreignKey: 'UniversityId'});
    }
  };
  University.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    creation_date: DataTypes.DATE,
    acronyn: {
      unique: true,
      type: DataTypes.STRING,
    },
    description: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM,
      values: ['public', 'private']
    },
    condition: DataTypes.STRING,
    dependency_name: DataTypes.STRING,
    uf: {
      type: DataTypes.ENUM,
      values: ['SP', 'RJ', 'PR', 'MG']
    }
  }, {
    sequelize,
    modelName: 'University',
  });

  return University;
};
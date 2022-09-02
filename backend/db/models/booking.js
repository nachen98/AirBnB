'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(
        models.User,
        {foreignKey: 'userId',
        onDelete: 'CASCADE', 
        }
      );
      Booking.belongsTo(
        models.Spot,
        {foreignKey: 'spotId',
        onDelete: 'CASCADE', 
      }
      );
    }
  }
  Booking.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
    }, 
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
        isEarlierThanEndDate(value){
          if(value >= this.endDate){
            throw new Error('endDate cannot be on or before startDate')
          }
        }
      }
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true
      }
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
/*  ,[Id_inventario]
      ,[Id_loja]
      ,[Version]
      ,[CreatedAt]
      ,[UpdatedAt]
      ,[Deleted]
      ,[Id_empresa]*/


const uuid = require('uuid/v4'); // ES5
const nSequelize = require('../models').Sequelize;


module.exports = (sequelize, DataTypes) => {
  var Inventario_loja = sequelize.define('Inventario_loja', {
    id: {

      primaryKey: true,
      defaultValue: function () {
        return uuid()
      },
      type: DataTypes.UUID,
    },


    Id_loja: {
      type: DataTypes.STRING(4000)
    },

    Id_inventario: {
      type: DataTypes.STRING(4000)
    },

    Id_empresa: {
      type: DataTypes.STRING(4000),
    },

    Deleted: {
      type: DataTypes.TINYINT
    },




  }, {
    timestamps: false,
    hasTrigger: true,
    tableName: 'Inventario_loja',
    hooks: {
      /*       beforeCreate: (user) => {
              var date = require('../utils/date');
              user.createdAt = date.getActualDate();
              user.UpdatedAt = date.getActualDate();
            }
       */
    }
  });


  return Inventario_loja;
};
/**[Id]
      ,[Id_empresa]
      ,[Id_inventario]
      ,[Codigo]
      ,[Descricao]
      ,[Area]
      ,[Status]
      ,[Version]
      ,[CreatedAt]
      ,[UpdatedAt]
      ,[Deleted] */

const uuid = require('uuid/v4'); // ES5


module.exports = (sequelize, DataTypes) => {
  var Lotes = sequelize.define('Lotes', {
    Id: {

      primaryKey: true,
      defaultValue: function () {
        return uuid()
      },
      type: DataTypes.UUID,
    },
    Id_inventario: {
      type: DataTypes.STRING(4000)
    },
    Codigo: {
      type: DataTypes.STRING(4000)
    },
    Descricao: {
      type: DataTypes.STRING(4000)
    },
    Area: {
      type: DataTypes.INTEGER
    },
    Status: {
      type: DataTypes.INTEGER
    },
    Id_empresa: {
      type: DataTypes.STRING(4000)
    },
    Deleted: {
      type: DataTypes.TINYINT
    },

  }, {
    timestamps: false,
    hasTrigger: true,
    tableName: 'Lotes',
    /*   hooks: {
        beforeCreate: (user) => {
          var date = require('../utils/date');
          user.updated_at = date.getActualDate();
        }
 
      } */
  });


  return Lotes;
};
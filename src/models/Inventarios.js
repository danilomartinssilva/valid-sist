/*  ,[Id]
      ,[Id_empresa]
      ,[Codigo]
      ,[Descricao]
      ,[Tipo]
      ,[Status]
      ,[Version]
      ,[CreatedAt]
      ,[UpdatedAt]
      ,[Deleted]*/
const uuid = require('uuid/v4'); // ES
module.exports = (sequelize, DataTypes) => {
  var Inventarios = sequelize.define('Inventarios', {
    Id: {
      type: DataTypes.STRING(4000),

      primaryKey: true,
      defaultValue: function () {
        return uuid()
      },
      type: DataTypes.UUID,
    },
    Tipo: {
      type: DataTypes.INTEGER
    },

    Id_empresa: {
      type: DataTypes.STRING(4000)
    },
    Codigo: {
      type: DataTypes.STRING(50)
    },
    Descricao: {
      type: DataTypes.STRING(4000)
    },
    Status: {
      type: DataTypes.INTEGER
    },
    Deleted: {
      type: DataTypes.TINYINT
    },


  }, {
    timestamps: false,
    hasTrigger: true,
    tableName: 'inventarios',
    /*   hooks: {
        beforeCreate: (user) => {
          var date = require('../utils/date');
          user.updated_at = date.getActualDate();
        }
 
      } */
  });


  return Inventarios;
};
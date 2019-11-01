/*
[Id]
      ,[Id_empresa]
      ,[Qtd_dispositivos]
      ,[Dta_inicio_vigencia]
      ,[Dta_termino_vigencia]
      ,[Version]
      ,[CreatedAt]
      ,[UpdatedAt]
      ,[Deleted]
      ,[Tipo_dispositivo]*/

const uuid = require('uuid/v4'); // ES5

module.exports = (sequelize, DataTypes) => {
  var Licencas = sequelize.define('Licencas', {
    Id: {

      primaryKey: true,
      defaultValue: function () {
        return uuid()
      },
      type: DataTypes.UUID,
    },
    Qtd_dispositivos: {
      type: DataTypes.INTEGER
    },
    Tipo_dispositivo: {
      type: DataTypes.INTEGER
    },
    Dta_inicio_vigencia: {
      type: DataTypes.DATE,
    },
    Dta_termino_vigencia: {
      type: DataTypes.DATE,
    },
    Id_empresa: {
      type: DataTypes.STRING(4000)
    },
    Deleted: {
      type: DataTypes.TINYINT
    },
    Tipo_dispositivo: {
      type: DataTypes.INTEGER
    },

  }, {
    timestamps: false,
    hasTrigger: true,
    tableName: 'Licencas',
    /*   hooks: {
        beforeCreate: (user) => {
          var date = require('../utils/date');
          user.updated_at = date.getActualDate();
        }
 
      } */
  });


  return Licencas;
};
/*  ,[Cpf_cnpj]
      ,[Tipo]
      ,[Nome_razao]
      ,[Telefone]
      ,[Email]
      ,[Nome_contato]
      ,[Logradouro]
      ,[Cep]
      ,[Cidade]
      ,[Estado]
      ,[Version]
      ,[CreatedAt]
      ,[UpdatedAt]
      ,[Deleted] */

const uuid = require('uuid/v4'); // ES5
const nSequelize = require('../models').Sequelize;

module.exports = (sequelize, DataTypes) => {
  var Locals = sequelize.define('Locals', {
    Id: {

      primaryKey: true,
      defaultValue: function () {
        return uuid()
      },
      type: DataTypes.UUID,
    },


    Id_empresa: {
      type: DataTypes.STRING(4000)
    },

    Codigo: {
      type: DataTypes.STRING(4000)
    },
    Descricao: {
      type: DataTypes.STRING(4000),
    },

    Deleted: {
      type: DataTypes.TINYINT,
      defaultValue: function () {
        return 0
      }
    },




  }, {
    timestamps: false,
    hasTrigger: true,
    tableName: 'Locals',
    hooks: {
      /*       beforeCreate: (user) => {
              var date = require('../utils/date');
              user.createdAt = date.getActualDate();
              user.UpdatedAt = date.getActualDate();
            }
       */
    }
  });


  return Locals;
};
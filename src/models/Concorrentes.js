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

module.exports = (sequelize, DataTypes) => {
  var Concorrentes = sequelize.define('Concorrentes', {
    Id: {

      primaryKey: true,
      defaultValue: function () {
        return uuid()
      },
      type: DataTypes.UUID,
    },

    Codigo: {
      type: DataTypes.STRING(4000)
    },
    Id_empresa: {
      type: DataTypes.STRING(4000)

    },
    Descricao: {
      type: DataTypes.STRING(4000)
    },
    Deleted: {
      type: DataTypes.TINYINT
    },

  }, {
    timestamps: false,
    hasTrigger: true,
    tableName: 'Concorrentes',
    /*   hooks: {
        beforeCreate: (user) => {
          var date = require('../utils/date');
          user.updated_at = date.getActualDate();
        }
 
      } */
  });


  return Concorrentes;
};
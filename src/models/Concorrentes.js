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

module.exports = (sequelize, DataTypes) => {
  var Concorrentes = sequelize.define('Concorrentes', {
    id: {
      type: DataTypes.STRING(4000),

      primaryKey: true
    },
    Tipo: {
      type: DataTypes.INTEGER
    },

    Codigo: {
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
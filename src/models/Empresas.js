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
  var Empresas = sequelize.define('Empresas', {
    id: {
      type: DataTypes.STRING(4000),

      primaryKey: true
    },
    Tipo: {
      type: DataTypes.INTEGER
    },

    Nome_razao: {
      type: DataTypes.STRING(4000)
    },
    Email: {
      type: DataTypes.STRING(4000)
    },
    Nome_contato: {
      type: DataTypes.STRING(4000)
    },
    Logradouro: {
      type: DataTypes.STRING(4000)
    },
    Cep: {
      type: DataTypes.STRING(4000)
    },
    Cidade: {
      type: DataTypes.STRING(4000)
    },
    Estado: {
      type: DataTypes.STRING(4000)
    },




  }, {
      timestamps: false,
      tableName: 'empresas',
      /*   hooks: {
          beforeCreate: (user) => {
            var date = require('../utils/date');
            user.updated_at = date.getActualDate();
          }
  
        } */
    });


  return Empresas;
};
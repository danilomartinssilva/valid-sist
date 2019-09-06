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
  var Items = sequelize.define('Items', {
    id: {
      type: DataTypes.STRING(4000),

      primaryKey: true
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
    Cod_interno: {
      type: DataTypes.STRING(4000)
    },
    Departamento: {
      type: DataTypes.STRING(4000)
    },
    Fator_estoque: {
      type: DataTypes.STRING(4000)
    },
    Origem: {
      type: DataTypes.STRING(4000)
    },
    Bloco: {
      type: DataTypes.STRING(4000)
    }



  }, {
    timestamps: false,
    tableName: 'Items',
    /*   hooks: {
        beforeCreate: (user) => {
          var date = require('../utils/date');
          user.updated_at = date.getActualDate();
        }
 
      } */
  });


  return Items;
};
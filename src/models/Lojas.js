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
  var Lojas = sequelize.define('Lojas', {
    id: {
      type: DataTypes.STRING(4000),

      primaryKey: true
    },


    Cod_loja: {
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
    tableName: 'Lojas',
    /*   hooks: {
        beforeCreate: (user) => {
          var date = require('../utils/date');
          user.updated_at = date.getActualDate();
        }
 
      } */
  });


  return Lojas;
};
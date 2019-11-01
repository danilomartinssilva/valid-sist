const uuid = require('uuid/v4'); // ES5
const Sequelize = require('sequelize');

/*
 ,[Id_empresa]
      ,[Serial]
      ,[Descricao]
      ,[Desc_grupo]
      ,[Dta_hora_cadastro]
      ,[Dta_hora_ultimo_acesso]
      ,[Desc_tipo_sistema_versao]
      ,[Version]
      ,[CreatedAt]
      ,[UpdatedAt]
      ,[Deleted]
      ,[Id_licenca]*/

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};




module.exports = (sequelize, DataTypes) => {
  var Dispositivoes = sequelize.define('Dispositivoes', {
    Id: {

      primaryKey: true,
      defaultValue: function () {
        return uuid()
      },
      type: DataTypes.UUID,
    },
    Serial: {
      type: DataTypes.STRING(4000)
    },
    Desc_grupo: {
      type: DataTypes.STRING(4000)
    },
    Dta_hora_cadastro: {
      type: DataTypes.DATE
      /*  defaultValue: DataTypes.NOW */
    },
    Dta_hora_ultimo_acesso: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    Desc_tipo_sistema_versao: {
      type: DataTypes.STRING(4000),
    },
    Id_licenca: {
      type: DataTypes.STRING(4000)
    }
    ,

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
    tableName: 'Dispositivoes',
    hooks: {
      beforeCreate: (dispositivos) => {
        console.log('Vendo o que vem antes de cadastrar', dispositivos)
      }

    }
  });


  return Dispositivoes;
};
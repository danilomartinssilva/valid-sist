const uuid = require('uuid/v4'); // ES5


module.exports = (sequelize, DataTypes) => {
  var Operadors = sequelize.define('Operadors', {
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
    Identificacao: {
      type: DataTypes.STRING(4000)
    },

    Email_senha: {
      type: DataTypes.STRING(4000)
    },

    Status: {
      type: DataTypes.TINYINT
    },
    Deleted: {
      type: DataTypes.TINYINT
    },
    Id_perfil: {
      type: DataTypes.STRING(4000)
    },
    User_userid: {
      type: DataTypes.STRING(4000)
    }




  }, {
    timestamps: false,
    hasTrigger: true,
    tableName: 'Operadors',
    /*   hooks: {
        beforeCreate: (user) => {
          var date = require('../utils/date');
          user.updated_at = date.getActualDate();
        }
 
      } */
  });


  return Operadors;
};
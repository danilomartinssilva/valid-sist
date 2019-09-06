

module.exports = (sequelize, DataTypes) => {
  var Operadors = sequelize.define('Operadors', {
    id: {
      type: DataTypes.STRING(4000),

      primaryKey: true
    },
    Id_empresa: {
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
    }




  }, {
    timestamps: false,
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
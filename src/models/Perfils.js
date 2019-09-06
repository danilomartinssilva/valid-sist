

module.exports = (sequelize, DataTypes) => {
  var Perfils = sequelize.define('Perfils', {
    id: {
      type: DataTypes.STRING(4000),

      primaryKey: true
    },
    Id_empresa: {
      type: DataTypes.STRING(4000)
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
    tableName: 'Perfils',
    /*   hooks: {
        beforeCreate: (user) => {
          var date = require('../utils/date');
          user.updated_at = date.getActualDate();
        }
 
      } */
  });


  return Perfils;
};
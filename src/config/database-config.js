const Sequelize = require('sequelize')
module.exports = {
  /*   ["development"]: {
      username: "root",
      password: "123456",
      database: "dsa_petters",
      host: "192.168.99.100",
      operatorsAliases: Sequelize.Op,
      dialect: "mysql",
    }, */

  username: "gerenciaauticomp",
  password: "934Q#5mePDML",
  database: "BDValidcodePRD",
  host: "sqlvalidcodeprd.database.windows.net",
  operatorsAliases: Sequelize.Op,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
    }
  }



};
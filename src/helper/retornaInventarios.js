const Inventarios = require('../models').Inventarios;
module.exports = async (id_empresa) => {


  return await Inventarios.findAll({
    where: {
      id_empresa: id_empresa
    }
  })




}
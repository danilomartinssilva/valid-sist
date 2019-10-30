const Inventario_loja = require('../models').Inventario_loja;
module.exports = async (Id_empresa, Id_loja, Id_inventario) => {
  console.log('##########', Id_inventario)

  return await Inventario_loja.create({
    Deleted: 0,
    Id_empresa: Id_empresa,
    Id_loja: Id_loja,
    Id_inventario: Id_inventario
  })



}
const Inventarios = require('../models').Inventarios;
const Lojas = require('../models').Lojas

class InventariosController {


  async add(req, res, next) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);
    console.log('Vendo o que veio do banco', info_user)
    console.log('Vendo o body', req.body)

    const addInventarios = await Inventarios.create({
      Descricao: req.body.descricao,
      Id_empresa: info_user.Id_empresa,
      Deleted: 0,
      Codigo: req.body.codigo,
      Status: req.body.status,
      Tipo: req.body.tipo

    })

    if (!addInventarios) {
      return res.json({
        message: 'Não foi possível adicionar um novo inventario',
        status: false
      })
        .status(200)
    }

    let qtdLojas = req.body.lojas.length;


    for (let i = 0; i < qtdLojas; i++) {
      await require('../helper/addInventarioLoja')(info_user.Id_empresa, req.body.lojas[i], addInventarios.dataValues.Id)

    }


    return res.json({
      result: addInventarios,
      status: true
    }).status(200)
  }

  async list(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);
    const inventarios = await Inventarios.findAll({
      where: {
        Id_empresa: info_user.Id_empresa
      }
    })
    if (!inventarios.length) {
      return res.json({
        status: false, message: 'Nao foi possivel listar o inventario'
      }).status(200)
    }
    return res.render('inventario/list', { inventarios: inventarios })

  }
  async form(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);
    const lojas = await Lojas.findAll({
      where: {
        Id_empresa: info_user.Id_empresa
      }
    })
    return res.render('inventario/form', { lojas: lojas })
  }

}






module.exports = new InventariosController()



const Locals = require('../models').Locals;

class LocalsController {


  async store(req, res) {

    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const localAdd = await Locals.create({
      Id_empresa: info_user.Id_empresa,
      Codigo: req.body.codigo,
      Descricao: req.body.descricao,
    })

    if (!localAdd) {
      return res.json({
        status: false,
        message: 'Nao foi possivel inserir local'

      }).status(200)
    }
    return res.json({
      status: true,
      result: localAdd,
    }).status(200)

  }
  form(req, res) {
    return res.render('locals/form');
  }

  async list(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);
    const locals = await Locals.findAll({
      where: {
        Id_empresa: info_user.Id_empresa
      }
    })
    if (!locals.length) {
      return res.json({
        status: false,
        message: 'Não foi possivel listar os locais'
      })
    }
    return res.render('locals/list', { locals: locals });
  }
}

module.exports = new LocalsController()
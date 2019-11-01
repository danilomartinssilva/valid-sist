const Lotes = require('../models').Lotes;

class LotesController {

  async store(req, res) {

    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);


    const addLote = Lotes.create({
      Id_inventario: req.body.id_inventario,
      Id_empresa: info_user.Id_empresa,
      Area: req.body.area,
      Status: req.body.status,
      Descricao: req.body.descricao,
      Codigo: req.body.codigo,
      Deleted: 0
    })
    if (!addLote) {
      return res.json({
        status: false,
        message: 'Erro ao inserir lote'
      }).status(200)
    }
    return res.redirect('lotes');
  }

  async form(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const info_inventarios = await require('../helper/retornaInventarios')(info_user.Id_empresa);

    return res.render('lotes/form', { info_inventarios })

  }
  async list(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const lotes = await Lotes.findAll({
      where: {
        id_empresa: info_user.Id_empresa
      }
    })

    return res.render('lotes/list', { lotes })
  }



}

module.exports = new LotesController()
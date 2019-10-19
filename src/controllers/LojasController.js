const Lojas = require('../models').Lojas
const Sequelize = require('../models').Sequelize;


class LojasController {

  async create(req, res) {
    console.log('Vendo como os dados chegam ', req.body)
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid)


    const lojas_add = await Lojas.create({
      Cod_loja: req.body.codigo_da_loja,
      Descricao: req.body.descricao,
      Id_empresa: info_user.Id_empresa,
      Deleted: 0


    });
    if (!lojas_add) {
      return res.json({ status: false, message: 'Nao foi possivel adicionar loja' });
    }
    return res.redirect('/lojas')

  }

  async list(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);
    const lojas = await Lojas.findAll({
      where: {
        Id_empresa: info_user.Id_empresa
      }
    })
    if (!lojas.length) {
      return res.json({ status: false, message: 'ver as lojas' });
    }
    return res.render('loja/list_lojas', { lojas: lojas })

  }
  async form_add(req, res) {

  }
  async form(req, res) {


    return res.render('loja/form');

  }
}

module.exports = new LojasController()
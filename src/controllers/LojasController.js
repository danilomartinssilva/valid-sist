const Lojas = require('../models').Lojas

class LojasController {

  async create(req, res) {
    const lojas_add = await Lojas.create({ ...req.body });
    if (!lojas_add) {
      return res.json({ status: false, message: 'Nao foi possivel adicionar loja' });
    }
    return res.json({ status: true, result: lojas_add })
  }

  async list(req, res) {
    const lojas = await Lojas.findAll({})
    if (!lojas.length) {
      return res.json({ status: false, message: 'ver as lojas' });
    }
    return res.json({ status: true, result: lojas })
  }
  async form_add(req, res) {

  }
  async form(req, res) {
    res.render('cadastro-loja', { user: req.user })
  }
}

module.exports = new LojasController()
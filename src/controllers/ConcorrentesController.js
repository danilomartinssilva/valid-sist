const Concorrentes = require('../models').Concorrentes;

class ConcorrontesController {


  async store(req, res) {

    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const concorrenteAdd = await Concorrentes.create({
      Descricao: req.body.descricao,
      Id_empresa: info_user.Id_empresa,
      Deleted: 0,
      Codigo: req.body.codigo

    })

    if (!concorrenteAdd) {
      return res.json({ status: false, }).status(200)
    }
    return res.redirect('/concorrentes')


  }

  async form(req, res) {

    return res.render('concorrente/form')
  }




  async list(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);
    const concorrentes = await Concorrentes.findAll({
      where: {
        Id_empresa: info_user.Id_empresa
      }
    })

    return res.render('concorrente/list', { concorrentes })

  }

}

module.exports = new ConcorrontesController()
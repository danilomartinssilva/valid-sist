const Operadors = require('../models').Operadors;


class OperadorsController {


  async list(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const operadores = await Operadors.findAll({
      where: {
        Id_empresa: info_user.Id_empresa
      }
    })
    if (!operadores.length) {
      return res.json({ status: false, message: 'Nao localizado Operadores' }).status(200)
    }
    return res.render('operador/list', { operadores })


  }



}

module.exports = new OperadorsController()
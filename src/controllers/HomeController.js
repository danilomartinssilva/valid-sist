const Operador = require('../models').Operadors;

class HomeController {


  async show(req, res) {
    res.render('index', { user: req.user });
  }
  async account(req, res) {
    const list_data_operador = await Operador.findAll({

      where: {
        User_userid: req.user.oid
      }
    })
    console.log(list_data_operador)
    if (!list_data_operador.length) {
      return res.json({ message: 'Nao foi possível localizar o usuario no banco', status: false })
    }
    /*  req.user.Id_empresa = list_data_operador.Id_empresa */
    res.render('account', { user: req.user });
  }
}

module.exports = new HomeController()



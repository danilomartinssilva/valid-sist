const Empresas = require('../models').Empresas;
class AuthController {



  async root(req, res, next) {


    const empresas_list = await Empresas.findAll({

    })

    return res.json({ result: empresas_list, status: true }).status(200)

  }

}

module.exports = new AuthController()
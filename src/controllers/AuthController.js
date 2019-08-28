const Empresas = require('../models').Empresas;
class AuthController {



  async root(req, res, next) {


    const empresas_list = await Empresas.findAll({
      where: {
        Estado: "MG"
      }
    })

    return res







  }

}

module.exports = new AuthController()
const Empresas = require('../models').Empresas
const Sequelize = require('../models').Sequelize

class EmpresasController {

  async list(req, res) {

    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const empresa = await Empresas.findOne({
      where: {
        id: info_user.Id_empresa
      }
    })
    if (!empresa) {
      return res.json({ message: 'Sem lojas', status: false }).status(200)
    }
    console.log('&&&&&&&&&&&&&&&&', empresa)

    return res.render('empresa/list', { empresa })

  }


}
module.exports = new EmpresasController()
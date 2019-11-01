const Licencas = require('../models/Licencas')

/**,[Id_empresa]
      ,[Qtd_dispositivos]
      ,[Dta_inicio_vigencia]
      ,[Dta_termino_vigencia]
      ,[Version]
      ,[CreatedAt]
      ,[UpdatedAt]
      ,[Deleted]
      ,[Tipo_dispositivo] */

class LicencasController {


  async store(req, res) {


    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const addLicenca = await Licencas.create({

      Id_empresa: info_user.Id_empresa,
      Dta_inicio_vigencia: req.body.dt_ini_vigencia,
      Dta_termino_vigencia: req.body.dt_fin_vigencia,
      Deleted: 0,
      Tipo_dispositivo: req.body.tipo_dispositivo
    })
    if (!addLicenca) {
      return res.json({ status: false }).status(200)
    }
    return res.json({
      status: true,
      result: addLicenca
    }).status(200)
  }


  form(req, res) {

    return res.render('licencas/form');

  }

  async list(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const licencas = await Licencas.findAll({
      where: {
        Id_empresa: info_user.Id_empresa,

      }
    })

    return res.render('licencas/list', { licencas });
  }





}

module.exports = new LicencasController()
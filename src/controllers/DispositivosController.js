const Dispositivoes = require('../models').Dispositivoes
const Licencas = require('../models').Licencas;

class DispositivosController {

  /*     ,[Serial]
        ,[Descricao]
        ,[Desc_grupo]
        ,[Dta_hora_cadastro]
        ,[Dta_hora_ultimo_acesso]
        ,[Desc_tipo_sistema_versao]
        ,[Version]
        ,[CreatedAt]
        ,[UpdatedAt]
        ,[Deleted] */

  async store(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const addDispositivos = await Dispositivoes.create({
      Descricao: req.body.descricao,
      Id_empresa: info_user.Id_empresa,
      Deleted: 0,
      Dta_hora_cadastro: new Date(Date.now()).toISOString(),
      Dta_hora_ultimo_acesso: new Date(Date.now()).toISOString(),
      Desc_tipo_sistema_versao: req.body.desc_tipo_sistema_versao,
      Id_licenca: req.body.id_licenca,
      Serial: req.body.serial

    })

    if (!addDispositivos) {
      return res.json({ status: false, message: 'Nao foi posivel fazer a adição do dispositivo' }).status(200)
    }
    return res.redirect('dispositivos');

  }
  async list(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const dispositivos = await Dispositivoes.findAll({
      where: {
        Id_empresa: info_user.Id_empresa
      }
    })

    console.log('Vendo o retorno dos dispositivos', dispositivos)
    return res.render('dispositivos/list', { dispositivos });

  }

  async form(req, res) {
    const info_user = await require('../helper/retornaInfoOperador')(req.user.oid);

    const licencas = await Licencas.findAll({
      where: {
        Id_empresa: info_user.Id_empresa
      }
    })
    console.log('Vendo licencas', licencas)
    return res.render('dispositivos/form', { licencas });

  }


}


module.exports = new DispositivosController()

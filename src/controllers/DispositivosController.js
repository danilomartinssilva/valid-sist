const Dispositivoes = require('../models').Dispositivoes


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
      Dta_hora_cadastro: Date.now(),
      Dta_hora_ultimo_acesso: Date.now(),
      Desc_tipo_sistema_versao: req.body.desc_tipo_sistema_versao,
      Id_licenca: req.body.id_licenca

    })

    if (!addDispositivos) {
      return res.json({ status: false, message: 'Nao foi posivel fazer a adição do dispositivo' }).status(200)
    }
    return res.json({
      status: true,
      result: addDispositivos
    })
      .status(200)

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

  form(req, res) {

    return res.render('dispositivos/form');

  }


}


module.exports = new DispositivosController()

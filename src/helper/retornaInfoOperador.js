const Operadors = require('../models').Operadors;
module.exports = async (user_id) => {


  return await Operadors.findOne({
    where: {
      User_userid: user_id
    }
  })




}
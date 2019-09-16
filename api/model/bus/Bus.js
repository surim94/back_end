const server = require('../models.js');
const Sequelize = require('sequelize');

const Stop = server.define('busStop' , {
  busStaId : {
    type : Sequelize.STRING(300),
    primaryKey : true,
    allowNull : false
  },
  busStaNm : {
    type : Sequelize.STRING(300)
  },
  busSeq : {
    type: Sequelize.INTEGER(10),
    allowNull : false
  }
}, {underscored:true});


module.exports = {
  Stop : Stop
}

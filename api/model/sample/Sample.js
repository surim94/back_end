const server = require('../models.js');
const Sequelize = require('sequelize');

const Sample = server.define('sampleTable' , {
  sampleKey : {
    type : Sequelize.INTEGER,
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
  },
  sampleOrder : {
    type : Sequelize.INTEGER
  },
  //question
  sampleContents : {
    type : Sequelize.STRING(300)
  }
}, {underscored:true});


module.exports = {
  Sample : Sample
}

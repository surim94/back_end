const server = require('../models.js');
const Sequelize = require('sequelize');

const Stop = server.define('busStop' , {
  busStaId : {
    type : Sequelize.STRING(50),
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

const Complexity = server.define('busComplexity' , {
  busStaId : {
    type : Sequelize.STRING(50),
    primaryKey : true,
    allowNull : false
  },
  seq : {
    type: Sequelize.INTEGER(11),
    allowNull : false
  },
  midnight : {
    type : Sequelize.INTEGER(11)
  },
  one : {
    type : Sequelize.INTEGER(11)
  },
  two : {
    type : Sequelize.INTEGER(11)
  },
  three : {
    type : Sequelize.INTEGER(11)
  },
  four : {
    type : Sequelize.INTEGER(11)
  },
  five : {
    type : Sequelize.INTEGER(11)
  },
  six : {
    type : Sequelize.INTEGER(11)
  },
  seven : {
    type : Sequelize.INTEGER(11)
  },
  eight : {
    type : Sequelize.INTEGER(11)
  },
  nine : {
    type : Sequelize.INTEGER(11)
  },
  ten : {
    type : Sequelize.INTEGER(11)
  },
  eleven : {
    type : Sequelize.INTEGER(11)
  },
  twelve : {
    type : Sequelize.INTEGER(11)
  },
  thirteen : {
    type : Sequelize.INTEGER(11)
  },
  fourteen : {
    type : Sequelize.INTEGER(11)
  },
  fifteen : {
    type : Sequelize.INTEGER(11)
  },
  sixteen : {
    type : Sequelize.INTEGER(11)
  },
  seventeen : {
    type : Sequelize.INTEGER(11)
  },
  eighteen : {
    type : Sequelize.INTEGER(11)
  },
  nineteen : {
    type : Sequelize.INTEGER(11)
  },
  twenty : {
    type : Sequelize.INTEGER(11)
  },
  twentyOne : {
    type : Sequelize.INTEGER(11)
  },
  twentyTwo : {
    type : Sequelize.INTEGER(11)
  },
  tewntyThree : {
    type : Sequelize.INTEGER(11)
  }
});
/*
Stop.associate = function(models) {
  Stop.hasOne(models.Complexity, {foreignKey: 'busStaId',sourceKey: 'busStaId'});

}
Complexity.associate = function(models) {
  Complexity.belongsTo(models.Stop, {foreignKey: 'busStaId', targetKey: 'busStaId'});

}
*/
Complexity.belongsTo(Stop);
Stop.hasOne(Complexity);

module.exports = {
  Stop : Stop,
  Complexity : Complexity
}

const models = require('../../model/sample/Sample');
const systemMessage = require('../../../config/systemMessage');
require('date-utils');

exports.show = (req,res) => {
    return models.Sample.findAll({
      order: [['sampleOrder', 'DESC']]
    })
    .then(sample => res.json(sample))
    .catch(function (err) {
        console.log(err);
        return res.status(500).json(err);
    });
};


exports.delete = (req, res) => {
  const sampleKey = req.params.sampleKey || '';

  if(!sampleKey.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "sampleKey" , req:sampleKey});
  }

  models.Sample.findOne({
    where: {sampleKey: sampleKey}
  }).then((sample)=>{
    if(sample == null){
      res.status(404).json(systemMessage.search.targetMissing);
    }else{
      models.Sample.destroy({
        where: {sampleKey: sampleKey}
      }).then(() => res.status(200).json(systemMessage.delete.success))
      .catch(function (err) {
            res.status(500).json(err)
      });
    }
  })
};


exports.update = (req,res) => {
  const sampleKey = req.params.sampleKey || '';

  if(!sampleKey.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "sampleKey" , req:sampleKey});
  }
  const newDate = new Date()
  const time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');

  return models.Sample.update({
    sampleContents: "Update! (" + time + ")"
  } , {
    where: {
      sampleKey: sampleKey
    }
  }).then(()=>{
      return models.Sample.findOne({
        where: {
          sampleKey: sampleKey
        }
     });
   }).then((sample) => {
     if(sample == null) {
       return res.status(404).json(systemMessage.delete.targetMissing);
     }else{
       return res.status(200).json("수정이 완료되었습니다.");
     }
    })
   .catch(function (err) {
       console.log(err);
       return res.status(500).json(err);
   });
};


exports.create = (req,res) => {

  const sampleContents = req.body.sampleContents || '';

  if(!sampleContents.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "sampleContents" , req:sampleContents});
  }

  models.Sample.create({
      sampleOrder: 0,
      sampleContents: sampleContents
  }).then((sample) => res.status(201).json(sample))
  .catch(function (err) {
      res.status(500).json(err)
  });
};


const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const controller = require('./sample.controller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', controller.show);

router.delete('/:sampleKey', controller.delete);

router.put('/:sampleKey', controller.update);

router.post('/', controller.create);

module.exports = router;

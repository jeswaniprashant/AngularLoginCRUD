const express = require('express');
const router = express.Router();
const accController = require('./accController.js');
const controller = require('./controller.js');

router.get('/', controller.verifyToken, accController.getALL);
router.post('/', controller.verifyToken, accController.create);
router.get('/:accountId', controller.verifyToken,  accController.getById);
router.put('/:accountId', controller.verifyToken,  accController.updateById);
router.delete('/:accountId', controller.verifyToken,  accController.deleteById);

module.exports = router;
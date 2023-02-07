const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/', indexController.index);
router.post('/cadastrar', indexController.cadastrar);
router.post('/logar', indexController.logar)

module.exports = router;

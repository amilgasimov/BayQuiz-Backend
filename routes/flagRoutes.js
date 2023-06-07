const router = require('express').Router();
const flagController = require('../controllers/flagController');

router.get('/', flagController.getAll)

module.exports = router
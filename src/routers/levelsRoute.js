const router = require('express').Router();
const LevelsController = require('./../controllers/LevelsController');
const validate = require('./validation/levelsValidation').validate;

router.get('/', LevelsController.getAllLevels);

router.post('/', validate, LevelsController.store);

router.get('/:id', LevelsController.getById);

router.put('/:id', validate, LevelsController.update);

router.delete('/:id', LevelsController.delete);

router.post('/:id/restore', LevelsController.restore);

module.exports = router;
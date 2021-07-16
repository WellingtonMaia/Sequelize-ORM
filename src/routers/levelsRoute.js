const router = require('express').Router();
const LevelsController = require('./../controllers/LevelsController');

router.get('/', LevelsController.getAllLevels);

router.post('/', LevelsController.store);

router.get('/:id', LevelsController.getById);

router.put('/:id', LevelsController.update);

router.delete('/:id', LevelsController.delete);

router.post('/:id/restore', LevelsController.restore);

module.exports = router;
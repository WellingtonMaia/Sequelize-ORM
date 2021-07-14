const router = require('express').Router();
const ClassesRopository = require('../controllers/ClassesController');

router.get('/', ClassesRopository.getAllClasses);

router.post('/', ClassesRopository.store);

router.get('/:id', ClassesRopository.getById);

router.put('/:id', ClassesRopository.update);

router.delete('/:id', ClassesRopository.delete);

module.exports = router;
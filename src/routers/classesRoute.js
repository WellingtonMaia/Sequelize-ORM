const router = require('express').Router({
  mergeParams: true
});
const ClassesRopository = require('../controllers/ClassesController');
const validate = require('./validation/classesValidation').validate;

router.get('/', ClassesRopository.getAllClasses);

router.post('/', validate, ClassesRopository.store);

router.get('/:id', ClassesRopository.getById);

router.put('/:id', validate, ClassesRopository.update);

router.delete('/:id', ClassesRopository.delete);

router.post('/:id/restore', ClassesRopository.restore);

module.exports = router;
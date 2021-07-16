const router = require('express').Router({
  mergeParams: true
});
const EnrollmentController = require('../controllers/EnrollmentController');
const validate = require('./validation/enrollmentValidation').validate;


router.get('/', EnrollmentController.getAllEnrollmentConfirmed);

router.get('/all', EnrollmentController.getAllEnrollment);

router.post('/', validate, EnrollmentController.store);

router.get('/:id', EnrollmentController.getById);

router.put('/:id', validate, EnrollmentController.update);

router.delete('/:id', EnrollmentController.delete);

router.post('/:id/restore', EnrollmentController.restore);


module.exports = router;
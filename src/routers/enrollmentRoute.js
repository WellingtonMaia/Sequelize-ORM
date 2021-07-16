const router = require('express').Router({
  mergeParams: true
});
const EnrollmentController = require('../controllers/EnrollmentController');

router.get('/', EnrollmentController.getAllEnrollmentConfirmed);

router.get('/all', EnrollmentController.getAllEnrollment);

router.post('/', EnrollmentController.store);

router.get('/:id', EnrollmentController.getById);

router.put('/:id', EnrollmentController.update);

router.delete('/:id', EnrollmentController.delete);

router.post('/:id/restore', EnrollmentController.restore);


module.exports = router;
const router = require('express').Router({
  mergeParams: true
});
const EnrollmentController = require('../controllers/EnrollmentController');

router.get('/', EnrollmentController.getAllEnrollment);

router.post('/', EnrollmentController.store);

router.get('/:id', EnrollmentController.getById);

router.put('/:id', EnrollmentController.update);

router.delete('/:id', EnrollmentController.delete);

module.exports = router;
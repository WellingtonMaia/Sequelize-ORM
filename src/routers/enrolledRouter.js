const router = require('express').Router({
  mergeParams: true,
});
const EnrollmentController = require('./../controllers/EnrollmentController');

router.get('/:classId/confirmed', EnrollmentController.getEnrollmentByClass);
router.get('/crowded', EnrollmentController.getCrowdedClasses);

module.exports = router;
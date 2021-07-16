const PeopleController = require('../controllers/PeopleController');
const router = require('express').Router();
const validate = require('./validation/peopleValidation').validate;

router.get('/', PeopleController.getAllPeople);

router.get('/active', PeopleController.getAllActivePeople);

router.get('/:id', PeopleController.getById);

router.post('/', validate, PeopleController.store);

router.post('/:studentId/cancel', PeopleController.cancelPeople);

router.put('/:id', validate, PeopleController.update);

router.delete('/:id', PeopleController.delete);

router.post('/:id/restore', PeopleController.restore);

module.exports = router;
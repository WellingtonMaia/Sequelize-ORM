const PeopleController = require('../controllers/PeopleController');
const router = require('express').Router();

router.get('/', PeopleController.getAllPeople);

router.get('/active', PeopleController.getAllActivePeople);

router.get('/:id', PeopleController.getById);

router.post('/', PeopleController.store);

router.post('/:studentId/cancel', PeopleController.cancelPeople);

router.put('/:id', PeopleController.update);

router.delete('/:id', PeopleController.delete);

router.post('/:id/restore', PeopleController.restore);

module.exports = router;
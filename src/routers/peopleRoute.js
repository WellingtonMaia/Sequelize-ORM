const PeopleController = require('../controllers/PeopleController');
const router = require('express').Router();

router.get('/', PeopleController.getAllPeople);

router.get('/:id', PeopleController.getById);

router.post('/', PeopleController.store);

router.put('/:id', PeopleController.update);

router.delete('/:id', PeopleController.delete);

module.exports = router;
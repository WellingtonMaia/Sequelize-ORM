const { body } = require('express-validator');

module.exports = {
  validate: [
    body('start_date').not().isEmpty().isDate()
    .withMessage("Fill the 'start_date'"),
    body('teacher_id').not().isEmpty().isNumeric()
    .custom(value => value > 0)
    .withMessage('Select a teacher!'),
    body('level_id').not().isEmpty().isNumeric()
    .custom(value => value > 0)
    .withMessage('Selet a level!')
  ] 
}
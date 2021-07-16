const { body } = require('express-validator');

module.exports = {
  validate: [
    body('status').not().isEmpty().isIn(['confirmed', 'canceled'])
    .withMessage("Select 'confirmed' or 'canceled'"),
    body('class_id').not().isEmpty().isNumeric()
    .custom(value => value > 0)
    .withMessage("Select a class")
  ]
}
const { body } = require('express-validator');

module.exports = {
  validate: [
    body('description').not().isEmpty().trim().escape()
    .withMessage("Fill the 'description'")
  ]
}
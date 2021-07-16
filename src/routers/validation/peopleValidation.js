const { body } = require('express-validator');

module.exports = {
  validate: [
    body('name').not().isEmpty().trim().escape()
    .isLength({ min: 3})
    .withMessage("Fill the 'name'"),
    body('email').isEmail().normalizeEmail()
    .withMessage('This is not e-mail!'),
    body('active').isBoolean().default(true)
    .withMessage('Person is active or not'),
    body('role').isIn(['teacher', 'student'])
    .withMessage("Role have be 'student' or 'teacher'")
  ]
}
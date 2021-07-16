const { validationResult } = require('express-validator');

class ErrorsRequest {
  static validateRequest(req) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      const msgErrors = errors.errors.map(error => error.msg)
      throw new Error(msgErrors);
    }
  }
}

module.exports = ErrorsRequest;
const { validateInputs } = require("../utils/helper");

const validator = (validationRules) => {
  return (req, res, next) => {
    const [isValid, errors] = validateInputs(validationRules, req.body);
    req.isValid = isValid;
    req.errors = errors;
    next();
  };
};

module.exports = validator;

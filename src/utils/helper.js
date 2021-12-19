const validations = require("../validation");

const validateInputs = (validationRules, requestBody) => {
  // console.log(requestBody,validationRules)
  let isValid = true;
  let errors = {};
  Object.keys(validationRules).map((rule) => {

    errors[rule] = [];
    validationRules[rule].map((arg) => {
      const argsArray = arg.split(":");
      const functionName = argsArray[0];
      // console.log(rule,functionName,argsArray,requestBody[rule])
      const [result, message] = validations[functionName](
        rule,
        requestBody[rule],
        argsArray
      );
      console.log(result,message)
      if (!result) {
        isValid = false;
        errors[rule].push(message);
      }
    });
  });
  return [isValid, errors];
}

module.exports = { validateInputs };

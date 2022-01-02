module.exports = {
    required: (fieldName, value, args) => {
      // console.log(value)
      
      if (value.length > 0) {
        return [true, null];
      }
      return [false, `${fieldName} is required`];
    },
    matchLength: (fieldName, value, args) => {
      const length = args[1];
      const unit = args[2];
      if (value.length == length) {
        return [true, null];
      }
      return [false, `${fieldName} should be exactly ${length} ${unit} long`];
    },
    minLength: (fieldName, value, args) => {
      const [_, length, unit] = args;
      // console.log(value);
      if (value.length >= length) {
        return checkUnitValidation(fieldName, value, unit);
      }
      return [false, `${fieldName} should be at least ${length} ${unit} long`];
    },
    maxLength: (fieldName, value, args) => {
      const [_, length, unit] = args;
      if (value.length <= length) {
        return checkUnitValidation(fieldName, value, unit);
      }
      return [false, `${fieldName} should be less than ${length} ${unit}`];
    },
    exactLength: (fieldName, value, args) => {
      const [_, length, unit] = args;
      // console.log(value.length,length,unit)
      if (value.length == length) {
        return checkUnitValidation(fieldName, value, unit);
      }
      return [false, `${fieldName} should be exactly ${length} ${unit}`];
    },
    email: (fieldName, email, args) => {
      console.log(email)
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return [true, null];
      }
      return [false, "Please enter a valid email"];
    },
    minlimit: (fieldName, value, args) => {
      if(value > 0 && value < 100) {
        // console.log(value)
        return [true, null];
      }
      return [false, "Age should between 1 and 100"];
    },
    gender: (fieldName, value, args) => {
      if(value == "Male" || value == "Female" || value == "Other") {
        return [true, null];
      }
      return [false,"Please enter a valid Gender"]
    }
  };
  
  function checkUnitValidation(fieldName, value, unit) {
    if (unit === "digits") {
      return checkDigitsValidation(fieldName, value, unit);
    }
  }
  
  function checkDigitsValidation(fieldName, value, unit) {
    if (/^[0-9]*$/.test(value)) {
      return [true, null];
    } else {
      return [false, `${fieldName} should consists of only ${unit}`];
    }
  }
  
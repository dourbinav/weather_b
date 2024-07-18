export const ValidateLogin = (values) => {
  const errors = {};

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};



export const ValidateSignup = (values) => {
    const errors = {};
  
    
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Passwords do not match";
    }
  
    return errors;
  };
  
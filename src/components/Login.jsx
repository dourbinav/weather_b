import { Link } from "react-router-dom";
import { ValidateLogin } from "./Validate";
import { useState } from "react";

export default function Login() {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name);
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: false }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateField = (field) => {
    const values = { email, password };
    const validationErrors = ValidateLogin(values);
    setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { email, password };
    const validationErrors = ValidateLogin(values);
    setErrors(validationErrors);

    // If no validation errors, proceed with form submission logic
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", values);
      // Perform login logic here
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-500 w-1/2 h-2/3 flex flex-col text-white items-center p-4 space-y-8 border-b-1"
      >
        <div>
          <label>Email</label><br />
          <input
            name="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className="border-b-2 p-2 bg-blue-500 rounded-md outline-none"
            placeholder=""
          /><br />
          {touched.email && errors.email && (
            <p className="text-red-600">{errors.email}</p>
          )}
        </div>
        <div>
          <label>Password</label><br />
          <input
            name="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className="border-b-2 p-2 bg-blue-500 rounded-md outline-none"
            placeholder=""
            type="password"
          /><br />
          {touched.password && errors.password && (
            <p className="text-red-600">{errors.password}</p>
          )}
        </div>
        <div className="w-1/3">
          <button className="bg-white w-full text-blue-500 rounded-sm p-2">
            Login
          </button>
        </div>
        <p className="">
          New Here?<Link to="/Signup">Create Account</Link>
        </p>
      </form>
    </div>
  );
}

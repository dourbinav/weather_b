import { Link } from "react-router-dom";
import { ValidateSignup } from "./Validate";
import { useState } from "react";

export default function Register() {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cnfpassword, setCnfPassword] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmpassword: false,
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!touched.email) {
      setTouched({ ...touched, email: true });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!touched.password) {
      setTouched({ ...touched, password: true });
    }
  };

  const handleCnfPasswordChange = (e) => {
    setCnfPassword(e.target.value);
    if (!touched.confirmpassword) {
      setTouched({ ...touched, confirmpassword: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      email,
      password,
      confirmpassword: Cnfpassword,
    };
    const validationErrors = ValidateSignup(values);
    setErrors(validationErrors);

    // If no validation errors, proceed with form submission logic
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", values);
      // Perform signup logic here
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-500 w-1/2 h-2/3 text-white flex flex-col h-1/2 items-center p-4 space-y-2 outline-none border-b-1"
      >
        <div>
          <label>Email</label><br />
          <input
            onChange={handleEmailChange}
            value={email}
            onBlur={() => setTouched({ ...touched, email: true })}
            className="border-b-2 p-2 rounded-md bg-blue-500 border-white outline-none"
            placeholder=""
            type="email"
          /><br />
          {touched.email && errors.email && (
            <p className="text-red-600">{errors.email}</p>
          )}
        </div>
        <div>
          <label>Password</label><br />
          <input
            onChange={handlePasswordChange}
            value={password}
            onBlur={() => setTouched({ ...touched, password: true })}
            className="border-b-2 p-2 rounded-md bg-blue-500 border-white outline-none"
            placeholder=""
            type="password"
          /><br />
          {touched.password && errors.password && (
            <p className="text-red-600">{errors.password}</p>
          )}
        </div>
        <div>
          <label>Confirm Password</label><br />
          <input
            onChange={handleCnfPasswordChange}
            value={Cnfpassword}
            onBlur={() => setTouched({ ...touched, confirmpassword: true })}
            className="border-b-2 p-2 rounded-md bg-blue-500 border-white outline-none"
            placeholder=""
            type="password"
          /><br />
          {touched.confirmpassword && errors.confirmpassword && (
            <p className="text-red-600">{errors.confirmpassword}</p>
          )}
        </div>
        <div className="w-2/3">
          <button className="bg-white w-full text-blue-500 rounded-sm p-2">Sign Up</button>
        </div>
        <p>Already User?<Link to="/">Login</Link></p>
      </form>
    </div>
  );
}

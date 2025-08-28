

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as Label from "@radix-ui/react-label";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "../../components/toaster/Toasters";
import "./Login.css"; // ✅ Import CSS file
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    email: "admin@gmail.com",
    password: "12345678",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    const result = await dispatch(loginUser(values));
    setIsSubmitting(false);

    if (result.payload?.token) {
      showSuccess(result.payload?.message || "Login successful");
      navigate("/");
    } else {
      showError(result.payload?.message || "Login failed Please Try Again");
    }
  };

  return (
    <section className="login-container">
      
      {/* ✅ Form Container */}
      <div className="login-box ">
        <h2 className="login-title">CRM Panel</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <Label.Root
                  htmlFor="email"
                  className="block text-sm font-semibold text-white mb-1"
                >
                  Email Address
                </Label.Root>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input-field"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Password Field */}
              <div>
                <Label.Root
                  htmlFor="password"
                  className="block text-sm font-semibold text-white mb-1"
                >
                  Password
                </Label.Root>
                <div className="relative">
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input-field"
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeClosedIcon width={20} height={20}/> : <EyeOpenIcon width={20} height={20}/>}
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;

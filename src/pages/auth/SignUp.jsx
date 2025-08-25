import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import bgImage from "../../assets/SignUp.jpg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
    mobile: "",
    email: "",
  };

  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    mobile: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must contain at least one special character"
      ),
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true); // Start submitting
    await new Promise((r) => setTimeout(r, 1500)); // Simulate API call
    alert(JSON.stringify(values, null, 2));
    setIsSubmitting(false); // Stop submitting
  };

  return (
    <section className="h-screen">
      <div className="container mx-auto p-12 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-5xl h-full"> {/* Adjusted height */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 h-full overflow-hidden">
                <img
                  src={bgImage}
                  alt="signup form"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 flex items-center justify-center px-6 py-8 h-full">
                <div className="w-full max-w-md text-black">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ handleSubmit }) => (
                      <Form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
                        <div className="overflow-y-auto"> {/* Added overflow-y-auto */}
                          <h5 className="text-lg font-normal mb-6 tracking-wider">
                            Sign Up
                          </h5>

                          <div className="mb-4">
                            <label className="block text-sm font-medium">
                              First Name
                            </label>
                            <Field
                              name="firstname"
                              type="text"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219]"
                            />
                            <ErrorMessage
                              name="firstname"
                              component="div"
                              className="text-red-500 text-sm "
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm font-medium ">
                              Last Name
                            </label>
                            <Field
                              name="lastname"
                              type="text"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219]"
                            />
                            <ErrorMessage
                              name="lastname"
                              component="div"
                              className="text-red-500 text-sm "
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm font-medium ">
                              Email address
                            </label>
                            <Field
                              name="email"
                              type="email"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219]"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-sm "
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm font-medium ">
                              Mobile No.
                            </label>
                            <Field
                              name="mobile"
                              type="tel"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219]"
                            />
                            <ErrorMessage
                              name="mobile"
                              component="div"
                              className="text-red-500 text-sm "
                            />
                          </div>

                          <div className="mb-6">
                            <label className="block text-sm font-medium ">
                              Password
                            </label>
                            <div className="relative">
                              <Field
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219]"
                              />
                              <span
                                className="absolute right-4 top-3 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <VisibilityOffIcon />
                                ) : (
                                  <VisibilityIcon />
                                )}
                              </span>
                            </div>
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-500 text-sm "
                            />
                          </div>
                        </div>

                        <div>
                          <div className="mb-6">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                            >
                              {isSubmitting ? "Signing up..." : "Sign Up"}
                            </button>
                          </div>

                          <p className="text-sm mb-5 text-[#393f81]">
                            Already have an account?{" "}
                            <a
                              href="#!"
                              className="font-medium text-[#393f81] underline"
                            >
                              Login here
                            </a>
                          </p>

                          <div className="text-xs text-gray-500 space-x-4">
                            <a href="#!" className="hover:underline">
                              Terms of use
                            </a>
                            <a href="#!" className="hover:underline">
                              Privacy policy
                            </a>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

// // import React, { useState } from "react";
// // import { Formik, Form, Field, ErrorMessage } from "formik";
// // import * as Yup from "yup";
// // import * as Label from "@radix-ui/react-label";
// // import VisibilityIcon from "@mui/icons-material/Visibility";
// // import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// // import {  loginUser } from "../../redux/slices/authSlice";
// // import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { showSuccess, showError } from "../../components/toaster/Toasters";

// // const Login = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const initialValues = {
// //     email: "",
// //     password: "",
// //   };

// //   const validationSchema = Yup.object().shape({
// //     email: Yup.string()
// //       .email("Invalid email address")
// //       .required("Email is required"),
// //     password: Yup.string()
// //       .required("Password is required")
// //       .min(8, "Password must be at least 8 characters"),
// //   });

// //   // const handleSubmit = async (values) => {
// //   //   setIsSubmitting(true);
// //   //   await dispatch(loginUser(values)); // <-- use the correct thunk
// //   //   setIsSubmitting(false);
// //   //   navigate("/");
// //   // };

// // const handleSubmit = async (values) => {
// //   setIsSubmitting(true);
// //   const result = await dispatch(loginUser(values));
// //   setIsSubmitting(false);

// //   if (result.payload?.token) {
// //     showSuccess(result.payload?.message || "Login successful"); // ✅ Backend message
// //     navigate("/");
// //   } else {
// //     showError(result.payload?.message || "Login failed"); // ✅ Backend error
// //   }
// // };


// //   return (
// //     <section className="min-h-screen  flex items-center justify-center px-4">
// //       <div className="w-full max-w-lg md:max-w-2xl lg:max-w-xl h-auto md:h-[500px]">
// //         <div className="bg-gradient-to-r from-[#181b22] to-[#454f6f] rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12 h-full flex items-center">
// //           <div className="w-full text-white">
// //             <Formik
// //               initialValues={initialValues}
// //               validationSchema={validationSchema}
// //               onSubmit={handleSubmit}
// //             >
// //               {({ handleSubmit }) => (
// //                 <Form onSubmit={handleSubmit} className="space-y-6">
// //                   <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-center mb-6">
// //                     Sign in 
// //                   </h2>

// //                   <div>
// //                     <Label.Root
// //                       htmlFor="email"
// //                       className="block text-md font-medium mb-1"
// //                     >
// //                       Email address
// //                     </Label.Root>
// //                     <Field
// //                       id="email"
// //                       name="email"
// //                       type="email"
// //                       placeholder="Enter your email"
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] text-white"
// //                     />
// //                     <ErrorMessage
// //                       name="email"
// //                       component="div"
// //                       className="text-red-400 text-sm mt-1"
// //                     />
// //                   </div>

// //                   <div>
// //                     <Label.Root
// //                       htmlFor="password"
// //                       className="block text-md font-medium mb-1"
// //                     >
// //                       Password
// //                     </Label.Root>
// //                     <div className="relative">
// //                       <Field
// //                         id="password"
// //                         name="password"
// //                         type={showPassword ? "text" : "password"}
// //                         placeholder="Enter your password"
// //                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] text-white"
// //                       />
// //                       <span
// //                         className="absolute right-4 top-3 cursor-pointer text-gray-500"
// //                         onClick={() => setShowPassword(!showPassword)}
// //                       >
// //                         {showPassword ? (
// //                           <VisibilityOffIcon className="text-white" />
// //                         ) : (
// //                           <VisibilityIcon className="text-white" />
// //                         )}
// //                       </span>
// //                     </div>
// //                     <ErrorMessage
// //                       name="password"
// //                       component="div"
// //                       className="text-red-400 text-sm mt-1"
// //                     />
// //                   </div>

// //                   <button
// //                     type="submit"
// //                     disabled={isSubmitting}
// //                     className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 text-lg cursor-pointer"
// //                   >
// //                     {isSubmitting ? "Logging in..." : "Login"}
// //                   </button>
// //                 </Form>
// //               )}
// //             </Formik>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Login;
// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import * as Label from "@radix-ui/react-label";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { loginUser } from "../../redux/slices/authSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { showSuccess, showError } from "../../components/toaster/Toasters";
// import bg from '../../assets/Img/beeimgtmp-20250825-124718.png'

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string()
//       .required("Password is required")
//       .min(8, "Password must be at least 8 characters"),
//   });

//   const handleSubmit = async (values) => {
//     setIsSubmitting(true);
//     const result = await dispatch(loginUser(values));
//     setIsSubmitting(false);

//     if (result.payload?.token) {
//       showSuccess(result.payload?.message || "Login successful");
//       navigate("/");
//     } else {
//       showError(result.payload?.message || "Login failed");
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center relative bg-gray-100">
//       {/* ✅ Full-Screen Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={bg}
//           alt="Background"
//           className="w-full h-full object-cover brightness-75"
//         />
//         {/* ✅ Overlay for better readability */}
//         {/* <div className="absolute inset-0 bg-black bg-opacity-90"></div> */}
//       </div>

//       {/* ✅ Form Container */}
//       <div className="relative z-10 w-full max-w-md md:max-w-lg bg-white rounded-xl shadow-2xl p-8 animate-fadeIn">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           Admin Login
//         </h2>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ handleSubmit }) => (
//             <Form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email Field */}
//               <div>
//                 <Label.Root
//                   htmlFor="email"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Email Address
//                 </Label.Root>
//                 <Field
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               {/* Password Field */}
//               <div>
//                 <Label.Root
//                   htmlFor="password"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Password
//                 </Label.Root>
//                 <div className="relative">
//                   <Field
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <span
//                     className="absolute right-4 top-3 cursor-pointer text-gray-500"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <VisibilityOffIcon />
//                     ) : (
//                       <VisibilityIcon />
//                     )}
//                   </span>
//                 </div>
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold"
//               >
//                 {isSubmitting ? "Logging in..." : "Login"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </section>
//   );
// };

// export default Login;

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
    email: "",
    password: "",
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
      showError(result.payload?.message || "Login failed");
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

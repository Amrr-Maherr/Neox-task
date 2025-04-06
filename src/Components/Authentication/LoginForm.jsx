import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthTitle from "./AuthTitle";
import AuthText from "./AuthText";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  identifier: Yup.string().required("Username or email is required"),
  password: Yup.string().required("Password is required"),
  rememberMe: Yup.boolean(),
});

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Login attempt:", values);
      alert(
        `Login submitted!\nIdentifier: ${values.identifier}\nRemember Me: ${values.rememberMe}`
      );
      setTimeout(() => {
        setSubmitting(false);
        // Optionally reset form or redirect
        // formik.resetForm();
      }, 1000);
    },
  });

  return (
    <div className="bg-white p-6 md:p-8 border-gray-200 w-full">
      <AuthTitle title="login" />
      <AuthText text="Welcome back! Sign in to your account." />
      <form onSubmit={formik.handleSubmit} className="space-y-5 mt-6">
        <div>
          <label
            htmlFor="login-identifier"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username or email address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="login-identifier"
            name="identifier"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.identifier}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
              formik.touched.identifier && formik.errors.identifier
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-yellow-500"
            }`}
            autoComplete="username"
          />
          {formik.touched.identifier && formik.errors.identifier ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.identifier}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="login-password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
              formik.touched.password && formik.errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-yellow-500"
            }`}
            autoComplete="current-password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <div className="flex items-center">
          <input
            id="login-remember-me"
            name="rememberMe"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // Keep blur handler for consistency if needed
            checked={formik.values.rememberMe}
            className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded transition duration-150 ease-in-out"
          />
          <label
            htmlFor="login-remember-me"
            className="ml-2 block text-sm text-gray-900 cursor-pointer"
          >
            Remember me
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-auto flex justify-center py-2.5 px-6 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out disabled:opacity-50" // Adjusted width/padding
          >
            {formik.isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </div>

        <div className="text-sm text-start">
          <Link
            to="/reset-password"
            className="font-medium text-yellow-600 hover:text-yellow-700 hover:underline"
          >
            Lost your password?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

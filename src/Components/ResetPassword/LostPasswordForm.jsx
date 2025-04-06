import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthTitle from "../Authentication/AuthTitle";
import AuthText from "../Authentication/AuthText";

const validationSchema = Yup.object({
  identifier: Yup.string().required("Username or email is required"),
});

function LostPasswordForm() {
  const formik = useFormik({
    initialValues: {
      identifier: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Password Reset Request:", values);
      alert(
        `Password reset link requested for: ${values.identifier}\n(Check console for actual implementation details)`
      );
      setTimeout(() => {
        setSubmitting(false);
      }, 1500);
    },
  });

  return (
    <div className="bg-white p-6 md:p-8 border-gray-200 w-1/2  mt-10">
      <AuthTitle title="Lost password" />
      <AuthText text="Lost your password? Please enter your username or email address. You will receive a link to create a new password via email." />

      <form onSubmit={formik.handleSubmit} className="space-y-5 mt-6">
        <div>
          <label
            htmlFor="lost-password-identifier"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username or email <span className="text-red-500">*</span>
            <span className="text-gray-500 text-xs font-normal ml-1">
              Required
            </span>
          </label>
          <input
            type="text"
            id="lost-password-identifier"
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
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-auto flex justify-center py-2.5 px-6 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out disabled:opacity-50"
          >
            {formik.isSubmitting ? "Sending..." : "Reset password"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LostPasswordForm;

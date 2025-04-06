import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthTitle from "./AuthTitle";
import AuthText from "./AuthText";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phoneNumber: Yup.string()
    // Basic phone number validation (digits only, adjust regex if needed)
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  role: Yup.string().oneOf(["customer", "vendor"]).required(),
  shopName: Yup.string().when("role", {
    is: "vendor",
    then: (schema) =>
      schema.required("Shop name is required when registering as a vendor"),
    otherwise: (schema) => schema.notRequired(), // Explicitly not required otherwise
  }),
  shopUrl: Yup.string()
    .url("Must be a valid URL (e.g., https://...)")
    .when("role", {
      is: "vendor",
      then: (schema) =>
        schema.required("Shop URL is required when registering as a vendor"),
      otherwise: (schema) => schema.notRequired(), // Explicitly not required otherwise
    }),
});

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "customer",
      shopName: "",
      shopUrl: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Register attempt:", values);
      alert(
        `Registration submitted!\nRole: ${values.role}\nUsername: ${values.username}`
      );
      // Simulate API call
      setTimeout(() => {
        setSubmitting(false);
        // Reset form or redirect after successful submission if needed
        // formik.resetForm();
      }, 1000);
    },
  });

  return (
    <div className="bg-white p-6 md:p-8 border-gray-200 w-full">
      <AuthTitle title="Register" />
      <AuthText text="Create new account today to reap the benefits of a personalized shopping experience." />

      <form onSubmit={formik.handleSubmit} className="space-y-5 mt-6">
        <div>
          <label
            htmlFor="reg-username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username <span className="text-red-500">*</span>
            <span className="text-gray-500 text-xs font-normal ml-1">
              Required
            </span>
          </label>
          <input
            type="text"
            id="reg-username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
              formik.touched.username && formik.errors.username
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-yellow-500"
            }`}
            autoComplete="username"
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.username}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="reg-email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address <span className="text-red-500">*</span>
            <span className="text-gray-500 text-xs font-normal ml-1">
              Required
            </span>
          </label>
          <input
            type="email"
            id="reg-email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-yellow-500"
            }`}
            autoComplete="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="reg-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password <span className="text-red-500">*</span>
            <span className="text-gray-500 text-xs font-normal ml-1">
              Required
            </span>
          </label>
          <input
            type="password"
            id="reg-password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
              formik.touched.password && formik.errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-yellow-500"
            }`}
            autoComplete="new-password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="reg-firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="reg-firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
              formik.touched.firstName && formik.errors.firstName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-yellow-500"
            }`}
            autoComplete="given-name"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="reg-lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="reg-lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
              formik.touched.lastName && formik.errors.lastName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-yellow-500"
            }`}
            autoComplete="family-name"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="reg-phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="reg-phone"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-yellow-500"
            }`}
            autoComplete="tel"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        <fieldset className="pt-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                id="role-customer"
                name="role"
                type="radio"
                value="customer"
                checked={formik.values.role === "customer"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
              />
              <label
                htmlFor="role-customer"
                className="ml-2 block text-sm text-gray-900 cursor-pointer"
              >
                I am a customer
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="role-vendor"
                name="role"
                type="radio"
                value="vendor"
                checked={formik.values.role === "vendor"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
              />
              <label
                htmlFor="role-vendor"
                className="ml-2 block text-sm text-gray-900 cursor-pointer"
              >
                I am a vendor
              </label>
            </div>
          </div>
          {formik.touched.role && formik.errors.role ? (
            <div className="text-red-500 text-xs mt-1 ml-2">
              {formik.errors.role}
            </div>
          ) : null}
        </fieldset>

        {formik.values.role === "vendor" && (
          <>
            <div>
              <label
                htmlFor="reg-shopName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Shop Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="reg-shopName"
                name="shopName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.shopName}
                className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
                  formik.touched.shopName && formik.errors.shopName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-yellow-500"
                }`}
              />
              {formik.touched.shopName && formik.errors.shopName ? (
                <div className="text-red-500 text-xs mt-1 ml-2">
                  {formik.errors.shopName}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="reg-shopUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Shop URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="reg-shopUrl"
                name="shopUrl"
                placeholder="https://yourstore.example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.shopUrl}
                className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition duration-150 ease-in-out ${
                  formik.touched.shopUrl && formik.errors.shopUrl
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-yellow-500"
                }`}
                autoComplete="url"
              />
              {formik.touched.shopUrl && formik.errors.shopUrl ? (
                <div className="text-red-500 text-xs mt-1 ml-2">
                  {formik.errors.shopUrl}
                </div>
              ) : null}
              <p className="text-xs text-gray-500 mt-1 pl-1">
                e.g., https://electro.madrasthemes.com/store/
              </p>
            </div>
          </>
        )}

        <p className="text-xs md:text-sm text-gray-600 !pt-1">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <a
            href="#"
            className="font-medium text-yellow-600 hover:text-yellow-700 hover:underline"
          >
            privacy policy
          </a>
          .
        </p>

        <div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-auto flex justify-center py-2.5 px-8 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out disabled:opacity-50"
          >
            {formik.isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>

        <div className="!mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-base font-semibold text-gray-800 mb-3">
            Sign up today and you will be able to:
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
            <li>Speed your way through checkout</li>
            <li>Track your orders easily</li>
            <li>Keep a record of all your purchases</li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;

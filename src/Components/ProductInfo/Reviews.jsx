import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Reviews() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    reviewText: Yup.string().required("Review must be at least 10 characters"),
    rating: Yup.number()
      .required("Rating is required")
      .min(1, "Rating must be between 1 and 5")
      .max(5, "Rating must be between 1 and 5"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      reviewText: "",
      rating: 0,
      saveInfo: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const renderStar = (starNumber) => (
    <button
      key={starNumber}
      type="button"
      className={`p-1 text-yellow-500 hover:text-yellow-700 focus:outline-none ${
        formik.values.rating >= starNumber ? "text-yellow-700" : "text-gray-300"
      }`}
      onClick={() => formik.setFieldValue("rating", starNumber)}
    >
      <FontAwesomeIcon icon={faStar} size="lg" />
    </button>
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Customer Reviews
      </h1>

      <div className="flex flex-wrap md:flex-row">
        {/* Left Side (Ratings Summary) */}
        <div className="w-full md:w-1/2 pr-4">
          {/* Overall Rating */}
          <div className="mb-6">
            <p className="text-gray-600 text-sm">Based on 0 reviews</p>
            <div className="flex items-center mt-2">
              <span className="text-3xl font-bold text-yellow-500 mr-2">
                0.0
              </span>
              <span className="text-gray-700">Overall</span>
            </div>
          </div>

          {/* Star Rating Distribution */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Star Ratings
            </h2>
            <div className="space-y-2">
              {/* 5 Stars */}
              <div className="flex items-center">
                <span className="w-16 text-gray-700">5 Stars</span>
                <div className="bg-gray-200 h-4 w-48 rounded-full relative">
                  <div
                    className="bg-yellow-500 h-4 rounded-full absolute left-0 top-0"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <span className="ml-3 text-gray-500">(0)</span>
              </div>
              {/* 4 Stars */}
              <div className="flex items-center">
                <span className="w-16 text-gray-700">4 Stars</span>
                <div className="bg-gray-200 h-4 w-48 rounded-full relative">
                  <div
                    className="bg-yellow-500 h-4 rounded-full absolute left-0 top-0"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <span className="ml-3 text-gray-500">(0)</span>
              </div>
              {/* 3 Stars */}
              <div className="flex items-center">
                <span className="w-16 text-gray-700">3 Stars</span>
                <div className="bg-gray-200 h-4 w-48 rounded-full relative">
                  <div
                    className="bg-yellow-500 h-4 rounded-full absolute left-0 top-0"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <span className="ml-3 text-gray-500">(0)</span>
              </div>
              {/* 2 Stars */}
              <div className="flex items-center">
                <span className="w-16 text-gray-700">2 Stars</span>
                <div className="bg-gray-200 h-4 w-48 rounded-full relative">
                  <div
                    className="bg-yellow-500 h-4 rounded-full absolute left-0 top-0"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <span className="ml-3 text-gray-500">(0)</span>
              </div>
              {/* 1 Star */}
              <div className="flex items-center">
                <span className="w-16 text-gray-700">1 Star</span>
                <div className="bg-gray-200 h-4 w-48 rounded-full relative">
                  <div
                    className="bg-yellow-500 h-4 rounded-full absolute left-0 top-0"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <span className="ml-3 text-gray-500">(0)</span>
              </div>
            </div>
          </div>

          {/* No Reviews Yet */}
          <p className="text-gray-600 italic mb-6">
            Be the first to review this product!
          </p>
        </div>

        {/* Right Side (Review Form) */}
        <div className="w-full md:w-1/2">
          <div className="border-t pt-8 mt-8 md:border-t-0 md:pt-0 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Submit Your Review
            </h2>

            <form onSubmit={formik.handleSubmit}>
              {/* Rating */}
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Rating:
                </label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((starNumber) => renderStar(starNumber))}
                </div>
                {formik.touched.rating && formik.errors.rating ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.rating}
                  </div>
                ) : null}
              </div>

              {/* Review Text */}
              <div className="mb-4">
                <label
                  htmlFor="reviewText"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Review:
                </label>
                <textarea
                  id="reviewText"
                  name="reviewText"
                  className="shadow appearance-none border rounded-full w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  placeholder="Share your thoughts about this product!"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.reviewText}
                />
                {formik.touched.reviewText && formik.errors.reviewText ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.reviewText}
                  </div>
                ) : null}
              </div>

              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              {/* Save Information */}
              <div className="mb-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-yellow-500"
                    name="saveInfo"
                    onChange={formik.handleChange}
                    checked={formik.values.saveInfo}
                  />
                  <span className="ml-2 text-gray-700 text-sm">
                    Save my name and email in this browser for future comments
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4  rounded-full focus:outline-none focus:shadow-outline"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

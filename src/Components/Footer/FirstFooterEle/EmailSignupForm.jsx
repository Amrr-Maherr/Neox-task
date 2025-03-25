import React from "react";

function EmailSignupForm() {
  return (
    <div className="flex items-center my-2">
      <input
        type="search"
        name=""
        id=""
        className="flex-grow border rounded-l-full  p-2 focus:outline-none w-full sm:w-96 md:w-[500px]"
        placeholder="Enter your email"
      />
      <button className="bg-[#333E48] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-r-full">
        SignUp
      </button>
    </div>
  );
}

export default EmailSignupForm;

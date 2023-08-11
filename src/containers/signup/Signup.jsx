import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="container mx-auto py-8">
        <form
          // onSubmit={handleFormSubmit}
          className="flex items-center justify-center"
        >
          <label>
            {" "}
            Sign up to hear the latest from us
            <input
              type="text"
              placeholder="Enter your email address"
              className="border p-4 rounded-l focus:outline-none focus:border-blue-200 ml-5"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />

          </label>

          <button type="submit" className="bg-[#e0afa5] text-black px-4 py-4 rounded-r text-sm">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

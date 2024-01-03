import React from "react";

const Review = () => {
  const img =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section id="review-section" className="mb-32">
      <div className="container mx-auto p-6 mb-5">
        <h1 className="text-5xl font-bold text-yellow-500 md:text-7xl mb-3">
          Hear from our customers
        </h1>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 mx-auto px-6">
        {/* <!-- card 1 --> */}
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
          <div className="bg-gray-200 shadow-xl p-5">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={img}
                alt="Reviewer's Profile Picture"
              />
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-gray-600">Customer</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-800">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-4">
            <span className="text-gray-600">Rating: 4.5/5</span>
          </div>
        </div>
        {/* <!-- card 1 end --> */}
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
          <div className="bg-gray-200 shadow-xl p-5">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={img}
                alt="Reviewer's Profile Picture"
              />
              <div>
                <h3 className="text-lg font-semibold">Sam Wong</h3>
                <p className="text-gray-600">Customer</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-800">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-4">
            <span className="text-gray-600">Rating: 4.5/5</span>
          </div>
        </div>
        {/* <!-- card 1 end --> */}
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
          <div className="bg-gray-200 shadow-xl p-5">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={img}
                alt="Reviewer's Profile Picture"
              />
              <div>
                <h3 className="text-lg font-semibold">Angela Yu</h3>
                <p className="text-gray-600">Customer</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-800">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-4">
            <span className="text-gray-600">Rating: 4.5/5</span>
          </div>
        </div>
        {/* <!-- card 1 end --> */}
      </div>
    </section>
  );
};

export default Review;

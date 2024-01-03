import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="mb-32">
      <div className="container mx-auto p-6 mb-5">
        <div className="flex flex-col md:flex-row flew-wrap">
          <div className="w-full md:w-1/2 mb-2">
            <h1 className="text-5xl font-bold text-yellow-500 md:text-7xl mb-3">
              Contact Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              euismod lorem sapien, eget imperdiet nisi fringilla a. Maecenas ut
              rhoncus diam, id tristique odio. Aenean sit amet quam semper,
              gravida erat facilisis, faucibus nunc. Cras diam justo,
              consectetur et justo vel, blandit dictum justo. In volutpat ac
              neque cursus pellentesque.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <form
              action="#"
              className="bg-white border border-gray-200 rounded-xl shadow-xl p-5"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phonenum"
                >
                  Telephone Number
                </label>
                <input
                  className="appearance-none border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phonenum"
                  name="phonenum"
                  type="tel"
                  placeholder="Enter your Phone Number"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4 flex">
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="date"
                  >
                    Date
                  </label>
                  <input
                    className="appearance-none border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    name="date"
                    type="date"
                    placeholder=""
                    autoComplete="off"
                    min="2023-11-27"
                    max="2024-12-31"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="time"
                  >
                    Time
                  </label>
                  <input
                    className="appearance-none border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="time"
                    name="time"
                    type="time"
                    placeholder=""
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="guestnum"
                >
                  Guest Number
                </label>
                <input
                  className="appearance-none border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="guestnum"
                  name="guestnum"
                  type="number"
                  placeholder="Enter Number of Guest"
                  autoComplete="off"
                />
              </div>
              <button
                className="w-full bg-yellow-500 p-3 rounded-lg hover:bg-yellow-400"
                type="submit"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

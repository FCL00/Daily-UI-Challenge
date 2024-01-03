import React from "react";
import food1 from "@/assets/food1.png";
import food2 from "@/assets/food2.png";
import food3 from "@/assets/food3.png";
const Menu = () => {
  return (
    // <!-- menu section -->
    <section id="menu">
      <div className="container mx-auto px-6 mt-10 space-y-1 md:space-y-2 mb-3">
        <h1 className="text-4xl font-bold text-center md:text-7xl md:text-left text-yellow-500 w-full">
          Explore Our Popular Dishes
        </h1>
        <p className="text-center text-stone-900 md:text-left w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          lorem sapien, eget imperdiet nisi fringilla a. Maecenas ut rhoncus
          diam, id tristique odio.
        </p>
      </div>
      {/* <!-- container  --> */}
      <div className="container mx-auto px-6 mb-32">
        {/* <!-- grid container  --> */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 mx-auto mb-32">
          {/* <!-- card 1 --> */}
          <div
            id="card-header"
            className="bg-white border border-gray-200 rounded-xl shadow-xl mt-5"
          >
            <a href="">
              <img className="round-t-lg" src={food1} alt="" />
            </a>
            <div className="card-body p-5">
              <h1 className="text-start text-3xl font-bold md:text-4xl mb-1">
                Food Name
              </h1>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              </p>
              <p className="text-yellow-500 mb-3">₱ 250.00</p>
              <a
                href=""
                className="p-3 px-6 pt-2 text-white bg-yellow-500 rounded-md align-baseline hover:bg-yellow-400"
              >
                Add to cart
              </a>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div
            id="card-header"
            className="bg-white border border-gray-200 rounded-xl shadow-xl mt-5"
          >
            <a href="">
              <img className="round-t-lg" src={food2} alt="" />
            </a>
            <div className="card-body p-5">
              <h1 className="text-start text-3xl font-bold md:text-4xl mb-1">
                Food Name
              </h1>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              </p>
              <p className="text-yellow-500 mb-3">₱ 250.00</p>
              <a
                href=""
                className="p-3 px-6 pt-2 text-white bg-yellow-500 rounded-md align-baseline hover:bg-yellow-400"
              >
                Add to cart
              </a>
            </div>
          </div>

          {/* <!-- card 3 --> */}
          <div
            id="card-header"
            className="bg-white border border-gray-200 rounded-xl shadow-xl mt-5"
          >
            <a href="">
              <img className="round-t-lg" src={food3} alt="" />
            </a>
            <div className="card-body p-5">
              <h1 className="text-start text-3xl font-bold md:text-4xl mb-1">
                Food Name
              </h1>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              </p>
              <p className="text-yellow-500 mb-3">₱ 250.00</p>
              <a
                href=""
                className="p-3 px-6 pt-2 text-white bg-yellow-500 rounded-md align-baseline hover:bg-yellow-400"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

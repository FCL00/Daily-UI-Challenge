import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DHL from "@/assets/dhl.png";
import FedEx from "@/assets/fedex.png";

const Shipping = ({ className }) => {
  return (
    <div className={`p-5 grid grid-cols-1 md:grid-cols-2 gap-2 ${className}`}>
      {/* 1st col */}
      <div className="contianer-1">
        <h1 className="text-xl font-medium">Ship to:</h1>
        <p className="text-gray-500">Shipping From Japan</p>
        <div className="mt-4 mb-4 relative ">
          <button className="w-full  p-2 flex justify-between items-center border text-black border-black rounded-sm">
            <span>Spain</span>
            <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
          </button>
          <div className="absolute hidden">China</div>
        </div>
        <div className="mb-4">
          <h1>Item's retail price:</h1>
          <div className="flex flex-col flex-wrap md:flex-row">
            <input
              className="w-full mb-1  md:mb-0 md:w-1/2 border border-black p-2"
              type="text"
              readOnly
              value={302.99}
            />
            <button className="p-2 w-full  md:mb-0 md:w-1/2 flex justify-between items-center border text-black border-black rounded-sm">
              <span>USD</span>
              <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h1>
            Package Dimension <small className="text-gray-700">(cm)</small>
          </h1>
          <div className="flex flex-wrap space-x-3 items-center">
            <input
              className="w-1/6 p-2 border border-black"
              type="text"
              value="75"
              readOnly
            />
            <span className="text-center">X</span>
            <input
              className="w-1/6 p-2 border border-black"
              type="text"
              value="43"
              readOnly
            />
            <span className="text-center">X</span>
            <input
              className="w-1/6 p-2 border border-black"
              type="text"
              value="75"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* 2nd col */}
      <div className="contianer-2">
        <h1 className="text-xl font-medium">Category</h1>
        <p className="text-gray-500">Lorem, ipsum dolor.</p>
        <div className="mt-4 mb-4 relative ">
          <button className="w-full p-2 flex justify-between items-center border text-black border-black rounded-sm">
            <span>Furniture</span>
            <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
          </button>
          <div className="absolute hidden">China</div>
        </div>

        <div className="mb-4">
          <h1>
            Package Weight <span className="text-gray-700">(KG)</span>
          </h1>
          <input
            className="w-full p-2 border border-black"
            type="text"
            value="75"
            readOnly
          />
        </div>

        <div className="mb-4 space-y-2">
          <h1>Taxes & Duties paid by:</h1>
          <div className="flex items-center space-x-1">
            <div className="mb-4 md:mb-0">
              <input
                id="sender"
                type="radio"
                name="group-1"
                value="0"
                className=" me-1 sr-only"
                defaultChecked={true}
              />
              <label
                htmlFor="sender"
                className="cursor-pointer p-2 border border-black rounded-sm"
              >
                Sender
              </label>
            </div>
            <div className="mb-4 md:mb-0">
              <input
                id="receiver"
                type="radio"
                name="group-1"
                value="1"
                className="me-1 sr-only"
              />
              <label
                htmlFor="receiver"
                className="cursor-pointer p-2 border border-black rounded-sm"
              >
                Receiver
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row-2 cols-span-1 md:col-span-2">
        <h1>Choose your courier</h1>
        <div className="mb-4 space-y-1">
          <input
            id="fedex"
            type="radio"
            name="group-2"
            value="fedex"
            defaultChecked={true}
            className="me-1 sr-only"
          />
          <label
            className="cursor-pointer p-2 rounded-sm border border-black flex flex-col relative"
            htmlFor="fedex"
          >
            <span className="mb-2 font-bold"> FedEx</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              soluta excepturi voluptatum?
            </p>
            <div className="absolute top-2 right-0">
              <img className="h-5 w-20" src={FedEx} alt="" />
            </div>
          </label>

          <input
            id="dhl"
            type="radio"
            name="group-2"
            value="dhl"
            className="me-1 sr-only"
          />
          <label
            className="cursor-pointer p-2  rounded-sm border border-black flex flex-col relative"
            htmlFor="dhl"
          >
            <span className="mb-2 font-bold">DHL</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              soluta excepturi voluptatum?
            </p>
            <div className="absolute top-0 right-0">
              <img className="h-12 w-20" src={DHL} alt="" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

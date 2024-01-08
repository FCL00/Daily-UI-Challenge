import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Modal = ({ open, close, children }) => {
  return (
    <div
      onClick={close}
      className={`modal fixed inset-0 flex justify-center items-center transition-colors p-5
      ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={`p-5 bg-white rounded-md flex flex-col items-center justify-around space-y-2 ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <FontAwesomeIcon icon={faTrashCan} className="text-5xl text-gray-700" />
        <h1 className="text-2xl font-bold">Confirm Delete</h1>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={close} className="absolute -top-0 right-5">
          X
        </button>
        <div className="flex space-x-1">
          <button className="btnDelete text-black text-center">
            <FontAwesomeIcon icon={faTrashCan} />
            <span className="ms-1">Delete</span>
          </button>
          <button
            onClick={close}
            className="border border-black/20 p-2 rounded-md hover:bg-black/20"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Modal from "@/components/Modal/Modal";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-[#181818]">
        <button
          className="btnDelete"
          onClick={() => {
            setOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
          <span className="ms-1">Delete</span>
        </button>
      </div>
      <Modal
        open={isOpen}
        close={() => {
          setOpen(false);
        }}
      ></Modal>
    </>
  );
}

export default App;
